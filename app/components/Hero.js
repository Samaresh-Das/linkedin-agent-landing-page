"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Terminal } from 'lucide-react';
import styles from './styles.module.css';

export default function Hero() {
  return (
    <section className={styles.heroWrapper} id="hero">
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            v1.0 — Agent deployed & running
          </span>
        </motion.div>

        {/* Impact stat */}
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '-0.5rem',
              opacity: 0.8
            }}
          >
            Saves
          </motion.span>
          <motion.div
            className={styles.heroStat}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            7–10 hrs/week
          </motion.div>
        </div>

        {/* Headline */}
        <h1 className={styles.heroTitle}>
          Post Every Day.{' '}
          <span className={styles.heroGradientText}>Never Open LinkedIn</span>{' '}
          to Write Again.
        </h1>

        {/* Subheadline */}
        <p className={styles.heroSubtitle}>
          A Done-For-You AI Agent that writes, designs, and publishes
          LinkedIn content on autopilot. Consistent presence, zero manual effort,
          automated growth while you sleep.
        </p>

        {/* Actions */}
        <div className={styles.heroActions}>
          <a href="https://calendly.com/samareshmail679/linkedin-agent-setup-call" className={styles.btnPrimary}>
            Book a Setup Call
            <ArrowRight className={styles.btnIcon} size={18} />
          </a>
          <a href="#how-it-works" className={styles.btnSecondary}>
            See How It Works
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Terminal prompt */}
        <motion.div
          className={styles.heroTerminal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* <Terminal size={14} />
          <span>$ npx linkedin-agent --deploy --auto-pilot</span>
          <span className={styles.heroCursor}></span> */}
        </motion.div>

        {/* Metric pills */}
        <motion.div
          className={styles.heroMetrics}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className={styles.heroMetric}>
            <div className={styles.heroMetricValue}>365</div>
            <div className={styles.heroMetricLabel}>Posts / Year</div>
          </div>
          <div className={styles.heroMetric}>
            <div className={styles.heroMetricValue}>$0</div>
            <div className={styles.heroMetricLabel}>Hosting Cost</div>
          </div>
          <div className={styles.heroMetric}>
            <div className={styles.heroMetricValue}>24hr</div>
            <div className={styles.heroMetricLabel}>Setup Time</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
