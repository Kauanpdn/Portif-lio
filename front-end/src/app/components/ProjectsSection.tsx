import React from 'react';
import styles from './ProjectsSection.module.scss';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Gym Management System',
      description: 'A comprehensive gym management platform with member tracking, class scheduling, and payment processing. Built with Spring Boot backend and Angular frontend.',
      image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDEzMTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Spring Boot', 'Angular', 'MySQL', 'REST API'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Veterinary Clinic Landing Page',
      description: 'Modern, responsive landing page for a veterinary clinic with appointment booking, service showcase, and contact forms. Features smooth animations and mobile-first design.',
      image: 'https://images.unsplash.com/photo-1770836037275-38b44e4b101f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwYW5pbWFsc3xlbnwxfHx8fDE3NzQyMDYxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'SCSS', 'Responsive'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Barber Shop Website',
      description: 'Full-featured barber shop website with online booking system, gallery, pricing, and team profiles. Integrated with payment gateway and email notifications.',
      image: 'https://images.unsplash.com/photo-1593702295094-aea22597af65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwc2Fsb258ZW58MXx8fHwxNzc0MjA2MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__container}>
        <div className={styles.projects__header}>
          <h2>Featured Projects</h2>
          <p>A selection of my recent work and personal projects</p>
        </div>
        
        <div className={styles.projects__grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
