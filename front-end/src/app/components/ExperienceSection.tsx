import React, { useState } from 'react';
import styles from './ExperienceSection.module.scss';
import TimelineItem from './TimelineItem';

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experienceData = [
    {
      year: '2024 - Present',
      title: 'Senior Full Stack Developer',
      subtitle: 'Tech Solutions Inc.',
      description: 'Leading development of enterprise applications using Java, Spring Boot, and React. Mentoring junior developers and implementing best practices.',
    },
    {
      year: '2022 - 2024',
      title: 'Full Stack Developer',
      subtitle: 'Digital Innovations Co.',
      description: 'Developed and maintained multiple client projects using Angular, Spring Boot, and MySQL. Collaborated with cross-functional teams to deliver high-quality solutions.',
    },
    {
      year: '2020 - 2022',
      title: 'Junior Developer',
      subtitle: 'StartUp Ventures',
      description: 'Built responsive web applications and REST APIs. Gained experience in agile development and version control systems.',
    },
  ];

  const educationData = [
    {
      year: '2016 - 2020',
      title: 'Bachelor of Science in Computer Science',
      subtitle: 'University of Technology',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web development. Completed capstone project on distributed systems.',
    },
    {
      year: '2023',
      title: 'AWS Certified Solutions Architect',
      subtitle: 'Amazon Web Services',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
    },
    {
      year: '2022',
      title: 'Oracle Certified Professional Java Developer',
      subtitle: 'Oracle',
      description: 'Certification validating proficiency in Java SE development and best practices.',
    },
  ];

  const currentData = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experience__container}>
        <div className={styles.experience__header}>
          <h2>Experience & Education</h2>
          <p>My professional journey and qualifications</p>
        </div>
        
        <div className={styles.experience__tabs}>
          <button
            className={`${styles.experience__tab} ${activeTab === 'experience' ? styles.active : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`${styles.experience__tab} ${activeTab === 'education' ? styles.active : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        
        <div className={styles.experience__timeline}>
          {currentData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
