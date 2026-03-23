import React from 'react';
import styles from './ProjectsSection.module.scss';
import ProjectCard from './ProjectCard';

import landpage from '../../assets/landpage.png';
import paginaDeLink from '../../assets/paginaDeLink.png';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Academia system saaS',
      description: 'SaaS completo para gestão de academias 💪 Desenvolvido com Spring Boot, React e autenticação segura Arquitetura escalável e padrão de mercado. Projeto em andamento!',
      image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDEzMTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Spring Boot', 'React', 'MySQL', 'REST API'],
      demoLink: '#',
      codeLink: 'https://github.com/Kauanpdn/academia-system-saaS',
    },
    {
      title: 'LinkTree',
      description: 'Landing page desenvolvida para cliente real 🥊 Atualmente em uso, com foco em conversão e responsividade HTML • CSS • JavaScript',
      image: paginaDeLink,
      tags: ['Javascript', 'Html', 'Css', 'Responsive'],
      demoLink: 'https://nandomaia-links.netlify.app',
      codeLink: 'https://github.com/Kauanpdn/linktreeNandoMaia',
    },
    {
      title: 'Personal Fight Website',
      description: 'Landing page moderna e responsiva para serviços de Personal Fight, desenvolvida com HTML, CSS, JavaScript e Tailwind CSS. Conta com interações dinâmicas como carrossel, FAQ e integração com WhatsApp. Estrutura organizada e escalável, ideal para projetos profissionais e personalizados.',
      image: landpage,
      tags: ['JavaScript', 'Html', 'Css', 'Tailwind'],
      demoLink: ' https://kauanpdn.github.io/projetoPersonalFight2.0/',
      codeLink: 'https://github.com/Kauanpdn/projetoPersonalFight2.0',
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__container}>
        <div className={styles.projects__header}>
          <h2>Featured Projects</h2>
          <p>Uma seleção dos meus trabalhos recentes e projetos pessoais.</p>
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
