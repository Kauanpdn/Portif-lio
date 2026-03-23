import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <span className={styles.navbar__logoText}>{'< Kauan Dev/>'}</span>
        </div>

        <button
          className={styles.navbar__hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.navbar__hamburgerLine}></span>
          <span className={styles.navbar__hamburgerLine}></span>
          <span className={styles.navbar__hamburgerLine}></span>
        </button>

        <ul className={`${styles.navbar__menu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <li className={styles.navbar__menuItem}>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li className={styles.navbar__menuItem}>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className={styles.navbar__menuItem}>
            <button onClick={() => scrollToSection('tech')}>Tech Stack</button>
          </li>
          <li className={styles.navbar__menuItem}>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className={styles.navbar__menuItem}>
            <button onClick={() => scrollToSection('experience')}>Experience</button>
          </li>
          <li className={styles.navbar__menuItem}>
            <button onClick={() => scrollToSection('contact')} className={styles.navbar__ctaButton}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
