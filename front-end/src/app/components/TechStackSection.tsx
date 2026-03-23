import React from 'react';
import styles from './TechStackSection.module.scss';
import TechCard from './TechCard';

const TechStackSection: React.FC = () => {
  const technologies = [
    { name: 'Java', icon: '☕', color: '#007396' },
    { name: 'Spring Boot', icon: '🍃', color: '#6DB33F' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Angular', icon: '🅰️', color: '#DD0031' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'MySQL', icon: '🐬', color: '#4479A1' },
    { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Git', icon: '📦', color: '#F05032' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
  ];

  return (
    <section id="tech" className={styles.techStack}>
      <div className={styles.techStack__container}>
        <div className={styles.techStack__header}>
          <h2>Tech Stack</h2>
          <p>Technologies and tools I work with</p>
        </div>
        
        <div className={styles.techStack__grid}>
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
