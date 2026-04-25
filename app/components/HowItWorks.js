"use client";

import { motion } from 'framer-motion';
import { Workflow } from 'lucide-react';
import styles from './styles.module.css';

const steps = [
  {
    number: "01",
    title: "Detect Trending Topics",
    desc: "The agent monitors news sources, RSS feeds, and industry signals relevant to your niche. It finds what's generating conversation right now.",
    terminal: "agent.pipeline",
    code: [
      { text: "// Step 1: Scan industry trends", type: "comment" },
      { text: "const ", type: "keyword" },
      { text: "topics", type: "default" },
      { text: " = ", type: "default" },
      { text: "await ", type: "keyword" },
      { text: "agent.scrapeTrends", type: "function" },
      { text: "(niche);", type: "default" },
      { text: "", type: "break" },
      { text: "const ", type: "keyword" },
      { text: "ranked", type: "default" },
      { text: " = ", type: "default" },
      { text: "analyzeSentiment", type: "function" },
      { text: "(topics);", type: "default" },
      { text: "", type: "break" },
      { text: "console.log", type: "function" },
      { text: "(", type: "default" },
      { text: `"Found ${`\${ranked.length}`} trending topics"`, type: "string" },
      { text: ");", type: "default" },
    ]
  },
  {
    number: "02",
    title: "Gemini Crafts the Post",
    desc: "Using trending context and your personalized tone of voice, Gemini drafts a compelling, native-feeling LinkedIn post — ready to publish.",
    terminal: "gemini.generate",
    code: [
      { text: "// Step 2: AI content generation", type: "comment" },
      { text: "const ", type: "keyword" },
      { text: "post", type: "default" },
      { text: " = ", type: "default" },
      { text: "await ", type: "keyword" },
      { text: "gemini.generate", type: "function" },
      { text: "({", type: "default" },
      { text: "", type: "break" },
      { text: "  topic: ranked[0],", type: "default" },
      { text: "", type: "break" },
      { text: "  style: ", type: "default" },
      { text: "user.toneOfVoice", type: "function" },
      { text: ",", type: "default" },
      { text: "", type: "break" },
      { text: "  format: ", type: "default" },
      { text: "'linkedin-native'", type: "string" },
      { text: "", type: "break" },
      { text: "});", type: "default" },
    ]
  },
  {
    number: "03",
    title: "Image Auto-Generated",
    desc: "A custom prompt is extracted from the post content and sent to an image generation model to create a visually striking, contextual image.",
    terminal: "imagen.create",
    code: [
      { text: "// Step 3: Generate visual asset", type: "comment" },
      { text: "const ", type: "keyword" },
      { text: "prompt", type: "default" },
      { text: " = ", type: "default" },
      { text: "extractVisualContext", type: "function" },
      { text: "(post);", type: "default" },
      { text: "", type: "break" },
      { text: "const ", type: "keyword" },
      { text: "image", type: "default" },
      { text: " = ", type: "default" },
      { text: "await ", type: "keyword" },
      { text: "imagen.generate", type: "function" },
      { text: "(prompt);", type: "default" },
      { text: "", type: "break" },
      { text: "// ✓ ", type: "comment" },
      { text: "Asset ready", type: "comment" },
    ]
  },
  {
    number: "04",
    title: "Published to LinkedIn",
    desc: "The fully packaged post (text + image) is pushed to LinkedIn via their official API at optimal engagement time. You never touch a thing.",
    terminal: "linkedin.publish",
    code: [
      { text: "// Step 4: Ship it 🚀", type: "comment" },
      { text: "await ", type: "keyword" },
      { text: "linkedin.shares.create", type: "function" },
      { text: "({", type: "default" },
      { text: "", type: "break" },
      { text: "  author: ", type: "default" },
      { text: "user.urn", type: "function" },
      { text: ",", type: "default" },
      { text: "", type: "break" },
      { text: "  text: post.content,", type: "default" },
      { text: "", type: "break" },
      { text: "  media: image.assetId", type: "default" },
      { text: "", type: "break" },
      { text: "});", type: "default" },
      { text: "", type: "break" },
      { text: "console.log", type: "function" },
      { text: "(", type: "default" },
      { text: "'✓ Published successfully'", type: "string" },
      { text: ");", type: "default" },
    ]
  }
];

function renderCodeTokens(tokens) {
  let lines = [[]];
  tokens.forEach(token => {
    if (token.type === "break") {
      lines.push([]);
    } else {
      lines[lines.length - 1].push(token);
    }
  });

  return lines.map((line, i) => (
    <div key={i} className={styles.codeLine}>
      {line.map((token, j) => (
        <span key={j} className={
          token.type === 'keyword' ? styles.codeKeyword :
          token.type === 'string' ? styles.codeString :
          token.type === 'function' ? styles.codeFunction :
          token.type === 'comment' ? styles.codeComment :
          undefined
        }>
          {token.text}
        </span>
      ))}
    </div>
  ));
}

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionTag}>
          <Workflow size={12} /> Pipeline Architecture
        </span>
        <h2 className={styles.sectionTitle}>
          The Architecture of<br />Automation
        </h2>
        <p className={styles.sectionSubtitle}>
          A transparent look at the 4-step pipeline running behind the scenes. 
          From trend detection to published post — fully autonomous.
        </p>
      </motion.div>

      <div className={styles.pipelineContainer}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={styles.pipelineStep}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className={styles.stepIndicator}>
              {step.number}
            </div>

            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>

            <div className={styles.stepVisual}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDot}></div>
                <div className={styles.terminalDot}></div>
                <div className={styles.terminalDot}></div>
                <span className={styles.terminalTitle}>{step.terminal}</span>
              </div>
              {renderCodeTokens(step.code)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
