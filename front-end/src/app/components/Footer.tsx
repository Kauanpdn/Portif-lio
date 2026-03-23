import React from 'react';
import styles from './Footer.module.scss';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__brand}>
            <div className={styles.footer__logo}>{'< Kauan Dev />'}</div>
            <p className={styles.footer__tagline}>
              Construindo o futuro, uma linha de código de cada vez.
            </p>
          </div>
          
          <div className={styles.footer__links}>
            <div className={styles.footer__section}>
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className={styles.footer__section}>
              <h5>Connect</h5>
              <div className={styles.footer__socials}>
                <a href="https://github.com/Kauanpdn" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kauan-pinheiro-do-nascimento/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                {/* <a href="mailto:developer@example.com">
                  <Mail size={20} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.footer__bottom}>
          <p>
            © {currentYear} Full Stack Developer. Feito com <Heart size={14} fill="currentColor" /> usando React & SCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
