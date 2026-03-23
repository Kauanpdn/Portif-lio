import React from 'react';
import styles from './ContactSection.module.scss';
import ContactForm from './ContactForm';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__header}>
          <h2>Get In Touch</h2>
          <p>Vamos conversar sobre seu próximo projeto ou oportunidade.</p>
        </div>
        
        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <div className={styles.contact__infoCard}>
              <Mail className={styles.contact__infoIcon} size={24} />
              <h4>Email</h4>
              <a href="mailto:developer@example.com">kauan.pnascimento750@gmail.com</a>
            </div>
            
            <div className={styles.contact__infoCard}>
              <MapPin className={styles.contact__infoIcon} size={24} />
              <h4>Location</h4>
              <p>São Paulo, SP</p>
            </div>
            
            <div className={styles.contact__socials}>
              <h4>Conecte-se comigo</h4>
              <div className={styles.contact__socialLinks}>
                <a 
                  href="https://github.com/Kauanpdn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contact__socialLink}
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/kauan-pinheiro-do-nascimento/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contact__socialLink}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.contact__formWrapper}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
