import React from 'react';
import styles from './ProjectCard.module.scss';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__image}>
        <img src={image} alt={title} />
        <div className={styles.projectCard__overlay}>
          <div className={styles.projectCard__buttons}>
            {codeLink && (
              <a 
                href={codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectCard__button}
              >
                <Github size={18} />
                Code
              </a>
            )}
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectCard__button}
              >
                <ExternalLink size={18} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.projectCard__content}>
        <h3 className={styles.projectCard__title}>{title}</h3>
        <p className={styles.projectCard__description}>{description}</p>
        
        <div className={styles.projectCard__tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.projectCard__tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
