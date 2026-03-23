import React, { useState } from 'react';
import styles from './ExperienceSection.module.scss';
import TimelineItem from './TimelineItem';

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experienceData = [
    {
      year: '2024 - 2025',
      title: 'Desenvolvedor Front-end',
      subtitle: 'Freelancer',
      description: 'Desenvolvimento de landing page profissional para apresentação dos serviços de consultoria fitness e aulas personalizadas com foco em posicionamento digital e captação de novos alunos. Aplicação de boas práticas de UI/UX, responsividade e performance utilizando React, Vite e Tailwind CSS. Atuação em contato direto com o cliente para alinhamento estratégico de identidade visual, estrutura de conteúdo e otimização para conversão de leads.',
    },
  ];

  const educationData = [
    {
      year: '2024 - atual',
      title: 'Bacharelado em ciência da computação e',
      subtitle: 'Universidade Estácio',
      description: 'Graduação em Ciência da Computação com foco em desenvolvimento de software, estruturas de dados, algoritmos e arquitetura de sistemas.',
    },
    {
      year: '2025 - 2026',
      title: 'Java do básico ao avançado',
      subtitle: 'Curso profinalizante',
      description: 'Curso voltado para o desenvolvimento da lógica de programação e domínio da linguagem Java, abordando desde os fundamentos até conceitos mais avançados. Conteúdo prático com exercícios e projetos, incluindo estrutura de dados básicas, orientação a objetos, boas práticas e aplicação do Java em cenários reais de desenvolvimento.',
    },
    {
      year: '2023 - 2024',
      title: 'Técnico em Informática para Internet',
      subtitle: 'Senac, São Paulo',
      description: 'Formação técnica full stack com foco em desenvolvimento web e mobile, utilizando React, Node.js e React Native, além de integração com APIs e banco de dados.',
    },
  ];

  const currentData = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experience__container}>
        <div className={styles.experience__header}>
          <h2>Experience & Education</h2>
          <p>Minha trajetória profissional e minhas qualificações</p>
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
