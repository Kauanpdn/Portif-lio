import React from 'react';
import styles from './TechCard.module.scss';

interface TechCardProps {
  name: string;
  icon: string;
  color?: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, icon, color }) => {
  return (
    <div className={styles.techCard}>
      <div className={styles.techCard__icon} style={{ color: color }}>
        {icon}
      </div>
      <span className={styles.techCard__name}>{name}</span>
    </div>
  );
};

export default TechCard;
