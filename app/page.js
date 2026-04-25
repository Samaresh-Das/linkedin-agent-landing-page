import Nav from './components/Nav';
import WebGLCanvas from './components/WebGLCanvas';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Results from './components/Results';
import HowItWorks from './components/HowItWorks';
import WhyBuy from './components/WhyBuy';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <WebGLCanvas />
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" />
        <Benefits />
        <Results />
        <HowItWorks />
        <div className="section-divider" />
        <WhyBuy />
        <CTA />
        <footer style={{
          position: 'relative',
          zIndex: 2,
          padding: '4rem 2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          animation: 'pulse-text 3s infinite ease-in-out',
        }}>
          © {new Date().getFullYear()} linkedin-agent — Deployed on GitHub Actions — Powered by Gemini
        </footer>
      </main>
    </>
  );
}
