"use client";

import { motion } from 'framer-motion';
import { Zap, Cpu, ImageIcon, GitBranch, Shield, Rocket } from 'lucide-react';
import styles from './styles.module.css';

const benefits = [
  {
    icon: <Zap size={22} />,
    title: "Daily AI-Written Posts",
    desc: "Gemini crafts high-quality, thought-provoking LinkedIn posts that match your voice, tone, and niche — every single day.",
    tag: "gemini-2.5-flash"
  },
  {
    icon: <Cpu size={22} />,
    title: "Trending Topic Detection",
    desc: "The agent scans news, RSS feeds, and industry signals to find what's trending in your space right now.",
    tag: "real-time"
  },
  {
    icon: <ImageIcon size={22} />,
    title: "Auto-Generated Images",
    desc: "Stop hunting for stock photos. The agent generates professional, contextual visuals for every post automatically.",
    tag: "imagen-3"
  },
  {
    icon: <GitBranch size={22} />,
    title: "Runs on GitHub Actions",
    desc: "No servers. No VMs. No Docker. Your agent runs on GitHub Actions with zero ongoing hosting cost after setup.",
    tag: "$0/month"
  },
  {
    icon: <Shield size={22} />,
    title: "Official LinkedIn API",
    desc: "Built on LinkedIn's actual OAuth & Share API. No sketchy browser automation or third-party tools that break.",
    tag: "no-selenium"
  },
  {
    icon: <Rocket size={22} />,
    title: "Fully Autonomous Pipeline",
    desc: "From topic detection → post writing → image creation → publishing. Runs end-to-end without human intervention.",
    tag: "zero-touch"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
};

export default function Benefits() {
  return (
    <section className={styles.section} id="benefits">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionTag}>
          <Zap size={12} /> What You Get
        </span>
        <h2 className={styles.sectionTitle}>
          Built for Scale.<br />Designed for Zero Effort.
        </h2>
        <p className={styles.sectionSubtitle}>
          Not a tool you learn. An agent that runs. A fully automated content 
          pipeline that operates independently of you.
        </p>
      </motion.div>

      <motion.div
        className={styles.benefitsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            className={styles.benefitCard}
            variants={cardVariants}
          >
            <div className={styles.benefitIconWrapper}>
              {benefit.icon}
            </div>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitText}>{benefit.desc}</p>
            <span className={styles.benefitTag}>{benefit.tag}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
