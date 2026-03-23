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
          <p>Desenvolvedor apaixonado com experiência na criação de aplicações web modernas.</p>
        </div>
        
        <div className={styles.about__content}>
          <div className={styles.about__text}>
            <p>Sou um desenvolvedor Full Stack com uma sólida base em tecnologias de backend e frontend. Com
              <strong> Java</strong> e <strong>Spring Boot</strong> para soluções robustas do lado do servidor, 
              e <strong>React</strong> e <strong>Angular</strong> Para interfaces de usuário dinâmicas, eu crio 
              Aplicações completas que sejam escaláveis, de fácil manutenção e fáceis de usar.
            </p>
            <p>
              Minha abordagem combina princípios de código limpo, melhores práticas do setor e um 
              compromisso com o aprendizado contínuo.
              Eu prospero em ambientes colaborativos e gosto de resolver desafios técnicos complexos.
            </p>
          </div>
          
          <div className={styles.about__cards}>
            <AboutCard
              icon={Code2}
              title="Clean Code"
              description="Escrever código de fácil manutenção, escalável e bem documentado."
            />
            <AboutCard
              icon={Rocket}
              title="Aprendizado rápido"
              description="Capacidade de adaptação rápida a novas tecnologias e estruturas."
            />
            <AboutCard
              icon={Users}
              title="Trabalho em equipe"
              description="Abordagem colaborativa com fortes habilidades de comunicação."
            />
            <AboutCard
              icon={Award}
              title="Melhores Práticas"
              description="Seguindo os padrões e modelos de design da indústria."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
