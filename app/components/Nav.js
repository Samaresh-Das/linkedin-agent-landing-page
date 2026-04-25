"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'rgba(5, 5, 5, 0.5)',
      }}
    >
      <a href="#" className={styles.navLogo}>
        <span className={styles.navLogoDot}></span>
        linkedin-agent
      </a>

      <ul className={styles.navLinks}>
        <li><a href="#benefits" className={styles.navLink}>Benefits</a></li>
        <li><a href="#results" className={styles.navLink}>Results</a></li>
        <li><a href="#how-it-works" className={styles.navLink}>How It Works</a></li>
        <li><a href="#why-buy" className={styles.navLink}>Why Buy</a></li>
        <li><a href="https://calendly.com/samareshmail679/linkedin-agent-setup-call" target="_blank" rel="noopener noreferrer" className={styles.navCta}>Book Setup Call</a></li>
      </ul>
    </motion.nav>
  );
}
