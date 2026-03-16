import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import imgLinkTree from '../assets/imgLinkTree.png';
import imgProjectFight from '../assets/imgProjectFight.png';


export function Projects() {
  const projects = [
    {
      title: "Academia-system saaS",
      description: "Em produção...  ",
      image: "",
      technologies: ["JAVA","SPRING BOOT","MySQL", "JWT", "REACT.JS"],
      github: "https://github.com/Kauanpdn/academia-system-saaS",
      // demo: "https://demo.example.com"
    },
    {
      title: "Sistema de gerenciamento de academia",
      description: "Full-stack application for managing gym memberships, class schedules, and member check-ins. Features role-based access control and real-time updates.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      technologies: ["Java","Spring Boot","MySQL", "JWT"],
      github: "https://github.com/Kauanpdn/academia-api",
      // demo: "https://demo.example.com"
    },
    {
      title: "Linktree - nando maia",
      description: "Modern, responsive landing page for a veterinary clinic with appointment booking system, service showcase, and contact forms.",
      image: imgLinkTree,
      technologies: ["JAVASCRIPT", "HTML", "CSS"],
      github: "https://github.com/Kauanpdn/linktreeNandoMaia",
      demo: "https://nandomaia-links.netlify.app"
    },
    {
      title: "Landing Page de Treinamento de Luta de Elite",
      description: "Landing Page moderna e totalmente responsiva para promover serviços de Personal Fight (treinamento personalizado em artes marciais)",
      image: imgProjectFight,
      technologies: ["JAVASCRIPT", "HTML", "TAILWIND CSS", "CSS"],
      github: "https://github.com/Kauanpdn/projetoPersonalFight2.0",
      demo: " https://kauanpdn.github.io/projetoPersonalFight2.0/"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#16A34A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#16A34A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-[#16A34A]/10 text-[#16A34A] rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-[#16A34A] hover:text-[#16A34A] transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
