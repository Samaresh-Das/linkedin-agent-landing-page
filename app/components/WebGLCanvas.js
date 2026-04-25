"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLCanvas() {
  const canvasRef = useRef(null);
  const sceneRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const refs = sceneRef.current;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        // Shift the wave lower on screen for a horizon feel
        p.y += 0.3;

        float d = length(p) * distortion;

        // Chromatic split — each channel gets offset differently
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        // Primary wave (cyan-white core)
        float wave1r = 0.04 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float wave1g = 0.04 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float wave1b = 0.04 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // Second harmonic wave — slower, offset, creates depth
        float wave2r = 0.02 / abs(p.y + sin((rx * 0.7 + time * 0.6 + 1.5) * xScale * 0.8) * yScale * 0.6 + 0.05);
        float wave2g = 0.02 / abs(p.y + sin((gx * 0.7 + time * 0.6 + 1.5) * xScale * 0.8) * yScale * 0.6 + 0.05);
        float wave2b = 0.02 / abs(p.y + sin((bx * 0.7 + time * 0.6 + 1.5) * xScale * 0.8) * yScale * 0.6 + 0.05);

        // Combine waves
        float r = wave1r + wave2r;
        float g = wave1g + wave2g;
        float b = wave1b + wave2b;

        // Color grade: push toward cyan/teal + warm orange on chromatic edges
        // Cyan tint on green and blue channels
        float cyan_r = r * 0.15;
        float cyan_g = g * 0.85;
        float cyan_b = b * 1.0;

        // Warm chromatic edge (the red channel becomes amber/orange)
        float warm_r = r * 0.9;
        float warm_g = r * 0.35;
        float warm_b = r * 0.05;

        // Merge: core is cyan-white, edges split into warm and cool
        vec3 color;
        color.r = warm_r + cyan_r * 0.5;
        color.g = cyan_g * 0.7 + warm_g * 0.3;
        color.b = cyan_b * 0.9;

        // Add subtle purple bloom near the wave
        float purpleBloom = 0.015 / (abs(p.y + sin((p.x + time * 0.3) * 0.8) * 0.3) + 0.1);
        color.r += purpleBloom * 0.3;
        color.g += purpleBloom * 0.05;
        color.b += purpleBloom * 0.5;

        // Vignette — darken edges for focus
        float vignette = 1.0 - smoothstep(0.4, 1.8, length(p - vec2(0.0, 0.3)));
        color *= vignette;

        // Tone mapping — prevent blow-out while keeping glow
        color = color / (1.0 + color);

        // Slight overall brightness boost
        color *= 1.15;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const initScene = () => {
      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.setClearColor(new THREE.Color(0x000000));

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

      refs.uniforms = {
        resolution: { value: [window.innerWidth, window.innerHeight] },
        time: { value: 0.0 },
        xScale: { value: 1.0 },
        yScale: { value: 0.5 },
        distortion: { value: 0.050 },
      };

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ];

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", positions);

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();
    };

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.008;
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
      refs.animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = refs.renderer.getPixelRatio();
      refs.renderer.setSize(width, height, false);
      refs.uniforms.resolution.value = [width * dpr, height * dpr];
    };

    initScene();
    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener("resize", handleResize);
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose();
        }
      }
      refs.renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
      }}
    />
  );
}
