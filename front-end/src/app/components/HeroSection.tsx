import React from 'react';
import styles from './HeroSection.module.scss';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badge}>
            👋 Welcome to my portfolio
          </div>
          
          <h1 className={styles.hero__title}>
            Full Stack Developer
          </h1>
          
          <p className={styles.hero__subtitle}>
            Specialized in <span className={styles.hero__highlight}>Java</span>, 
            <span className={styles.hero__highlight}> Spring Boot</span>, 
            <span className={styles.hero__highlight}> React</span> and 
            <span className={styles.hero__highlight}> Angular</span>
          </p>
          
          <p className={styles.hero__description}>
            Building scalable, high-performance web applications with modern technologies. 
            Passionate about clean code, best practices, and delivering exceptional user experiences.
          </p>
          
          <div className={styles.hero__buttons}>
            <button 
              className={styles.hero__primaryBtn}
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button 
              className={styles.hero__secondaryBtn}
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
          
          <div className={styles.hero__socials}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.hero__socialLink}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.hero__socialLink}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:developer@example.com" className={styles.hero__socialLink}>
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className={styles.hero__imageWrapper}>
          <div className={styles.hero__imagePlaceholder}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="#16A34A" opacity="0.1"/>
              <circle cx="100" cy="100" r="70" fill="#16A34A" opacity="0.2"/>
              <circle cx="100" cy="100" r="50" fill="#16A34A" opacity="0.3"/>
              <text x="100" y="110" fontSize="60" fill="#16A34A" textAnchor="middle" fontWeight="bold">
                FS
              </text>
            </svg>
          </div>
          
          <div className={styles.hero__floatingCard} style={{ top: '10%', left: '-10%' }}>
            <span>☕ Java</span>
          </div>
          <div className={styles.hero__floatingCard} style={{ top: '60%', left: '-5%' }}>
            <span>🍃 Spring</span>
          </div>
          <div className={styles.hero__floatingCard} style={{ top: '20%', right: '-10%' }}>
            <span>⚛️ React</span>
          </div>
          <div className={styles.hero__floatingCard} style={{ bottom: '20%', right: '-5%' }}>
            <span>🅰️ Angular</span>
          </div>
        </div>
      </div>
      
      <div className={styles.hero__background}>
        <div className={styles.hero__gradient}></div>
      </div>
    </section>
  );
};

export default HeroSection;
