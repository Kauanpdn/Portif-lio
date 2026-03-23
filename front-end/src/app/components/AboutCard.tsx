import React from 'react';
import styles from './AboutCard.module.scss';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.aboutCard__icon}>
        <Icon size={24} />
      </div>
      <h4 className={styles.aboutCard__title}>{title}</h4>
      <p className={styles.aboutCard__description}>{description}</p>
    </div>
  );
};

export default AboutCard;
