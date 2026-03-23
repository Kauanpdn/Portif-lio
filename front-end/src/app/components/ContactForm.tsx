import React, { useState, FormEvent } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.contactForm__group}>
        <label htmlFor="name" className={styles.contactForm__label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.contactForm__input}
          required
        />
      </div>
      
      <div className={styles.contactForm__group}>
        <label htmlFor="email" className={styles.contactForm__label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.contactForm__input}
          required
        />
      </div>
      
      <div className={styles.contactForm__group}>
        <label htmlFor="message" className={styles.contactForm__label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.contactForm__textarea}
          rows={5}
          required
        />
      </div>
      
      <button
        type="submit"
        className={styles.contactForm__submit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {submitStatus === 'success' && (
        <div className={styles.contactForm__success}>
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
