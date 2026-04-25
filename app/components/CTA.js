"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import styles from './styles.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection} id="book-call">
      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.sectionTag}>
          <Clock size={12} /> Limited Availability
        </span>

        <h2 className={styles.ctaTitle}>
          Ready to Automate<br />
          <span className={styles.heroGradientText}>Your LinkedIn Growth?</span>
        </h2>

        <p className={styles.ctaDesc}>
          Stop spending hours crafting posts. Book a setup call,
          and your agent will be live within 24 hours — posting daily,
          building your authority, while you focus on what matters.
        </p>

        <a href="https://calendly.com/samareshmail679/linkedin-agent-setup-call" className={styles.btnPrimaryLarge}>
          Get It Running in 24 Hours
          <ArrowRight className={styles.btnIcon} size={20} />
        </a>

        <div className={styles.ctaNote}>
          <Clock size={14} />
          We only onboard 5 new clients per week.
        </div>

        <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6, fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Model Flexibility:</span> I can integrate the agent with any LLM of your choice (Gemini, OpenAI, Claude). While the agent's infrastructure runs for free on GitHub Actions, any API usage costs from your chosen provider are managed directly by you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
