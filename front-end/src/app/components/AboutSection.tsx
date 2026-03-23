import React from 'react';
import styles from './AboutSection.module.scss';
import AboutCard from './AboutCard';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__header}>
          <h2>About Me</h2>
          <p>Passionate developer with expertise in building modern web applications</p>
        </div>
        
        <div className={styles.about__content}>
          <div className={styles.about__text}>
            <p>
              I'm a Full Stack Developer with a strong foundation in both backend and frontend technologies. 
              With expertise in <strong>Java</strong> and <strong>Spring Boot</strong> for robust server-side solutions, 
              and <strong>React</strong> and <strong>Angular</strong> for dynamic user interfaces, I create 
              end-to-end applications that are scalable, maintainable, and user-friendly.
            </p>
            <p>
              My approach combines clean code principles, industry best practices, and a commitment to 
              continuous learning. I thrive in collaborative environments and enjoy solving complex 
              technical challenges.
            </p>
          </div>
          
          <div className={styles.about__cards}>
            <AboutCard
              icon={Code2}
              title="Clean Code"
              description="Writing maintainable, scalable, and well-documented code"
            />
            <AboutCard
              icon={Rocket}
              title="Fast Learner"
              description="Quick to adapt to new technologies and frameworks"
            />
            <AboutCard
              icon={Users}
              title="Team Player"
              description="Collaborative approach with strong communication skills"
            />
            <AboutCard
              icon={Award}
              title="Best Practices"
              description="Following industry standards and design patterns"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
