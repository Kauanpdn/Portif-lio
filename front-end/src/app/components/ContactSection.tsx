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
          <p>Let's discuss your next project or opportunity</p>
        </div>
        
        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <div className={styles.contact__infoCard}>
              <Mail className={styles.contact__infoIcon} size={24} />
              <h4>Email</h4>
              <a href="mailto:developer@example.com">developer@example.com</a>
            </div>
            
            <div className={styles.contact__infoCard}>
              <MapPin className={styles.contact__infoIcon} size={24} />
              <h4>Location</h4>
              <p>San Francisco, CA</p>
            </div>
            
            <div className={styles.contact__socials}>
              <h4>Connect With Me</h4>
              <div className={styles.contact__socialLinks}>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contact__socialLink}
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
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
