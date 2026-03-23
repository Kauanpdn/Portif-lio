import React from 'react';
import styles from './TimelineItem.module.scss';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, subtitle, description }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItem__marker}>
        <div className={styles.timelineItem__dot}></div>
      </div>
      
      <div className={styles.timelineItem__content}>
        <div className={styles.timelineItem__year}>{year}</div>
        <h4 className={styles.timelineItem__title}>{title}</h4>
        <p className={styles.timelineItem__subtitle}>{subtitle}</p>
        <p className={styles.timelineItem__description}>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
