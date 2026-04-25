"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award } from 'lucide-react';
import styles from './styles.module.css';

const stats = [
  {
    day: "30 Days",
    number: "3×",
    label: "More Profile Views",
    desc: "Consistent daily posting triggers LinkedIn's algorithm to start surfacing your profile to new audiences.",
    icon: <TrendingUp size={16} />
  },
  {
    day: "60 Days",
    number: "+500",
    label: "Targeted Connections",
    desc: "Your reach compounds. Inbound connection requests from industry peers, recruiters, and potential clients surge.",
    icon: <Users size={16} />
  },
  {
    day: "90 Days",
    number: "Authority",
    label: "Niche Dominance",
    desc: "You're the recognized voice in your space. Inbound DMs, speaking invites, and opportunities become the new normal.",
    icon: <Award size={16} />
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function Results() {
  return (
    <section className={styles.resultsSection} id="results">
      <div className={styles.section}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionTag}>
            <TrendingUp size={12} /> Realistic Outcomes
          </span>
          <h2 className={styles.sectionTitle}>
            What Happens When You<br />Show Up Every Single Day
          </h2>
          <p className={styles.sectionSubtitle}>
            The compounding effect of daily, high-quality content — 
            without you lifting a finger.
          </p>
        </motion.div>

        <motion.div
          className={styles.resultsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={styles.resultCard}
              variants={cardVariants}
            >
              <div className={styles.resultTimeLabel}>
                {stat.icon}
                {stat.day}
              </div>
              <div className={styles.resultNumber}>{stat.number}</div>
              <div className={styles.resultLabel}>{stat.label}</div>
              <div className={styles.resultDesc}>{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
