"use client";

import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import styles from './styles.module.css';

export default function WhyBuy() {
  return (
    <section className={styles.section} id="why-buy">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionTag}>
          <ShieldAlert size={12} /> Objection Killer
        </span>
        <h2 className={styles.sectionTitle}>Why Not Just DIY It?</h2>
        <p className={styles.sectionSubtitle}>
          You could build this yourself. You could hire a writer. Here's why both cost you more.
        </p>
      </motion.div>

      <div className={styles.comparisonGrid}>
        <motion.div className={styles.comparisonCard}
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <h3 className={styles.comparisonTitle}>
            <ShieldAlert size={20} style={{ color: '#ef4444' }} />
            DIY / Hiring a Writer
          </h3>
          <ul className={styles.comparisonList}>
            <li className={styles.comparisonItem}><XCircle className={styles.iconCross} size={18} />Setup takes weeks of coding, debugging, and testing.</li>
            <li className={styles.comparisonItem}><XCircle className={styles.iconCross} size={18} />LinkedIn OAuth is notoriously difficult to maintain.</li>
            <li className={styles.comparisonItem}><XCircle className={styles.iconCross} size={18} />Content writers cost $500–$2,000+/month. Still manual.</li>
            <li className={styles.comparisonItem}><XCircle className={styles.iconCross} size={18} />Third-party posting tools break constantly.</li>
            <li className={styles.comparisonItem}><XCircle className={styles.iconCross} size={18} />Human inconsistency — missed days kill momentum.</li>
          </ul>
        </motion.div>

        <motion.div className={`${styles.comparisonCard} ${styles.cardHighlight}`}
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className={styles.comparisonTitle}>
            <Sparkles size={20} style={{ color: 'var(--accent-cyan)' }} />
            The Done-For-You Agent
          </h3>
          <ul className={styles.comparisonList}>
            <li className={styles.comparisonItem}><CheckCircle2 className={styles.iconCheck} size={18} />Pre-built, tested, deploy in 24 hours.</li>
            <li className={styles.comparisonItem}><CheckCircle2 className={styles.iconCheck} size={18} />We handle LinkedIn API & OAuth setup.</li>
            <li className={styles.comparisonItem}><CheckCircle2 className={styles.iconCheck} size={18} />One-time fee. Zero hosting costs (GitHub Actions).</li>
            <li className={styles.comparisonItem}><CheckCircle2 className={styles.iconCheck} size={18} />Official LinkedIn API — no hacks, no breakage.</li>
            <li className={styles.comparisonItem}><CheckCircle2 className={styles.iconCheck} size={18} />Choose your LLM. You only pay for your API usage.</li>
            <li className={styles.comparisonItem}><CheckCircle2 className={styles.iconCheck} size={18} />Never misses a day. Machine-grade consistency.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
