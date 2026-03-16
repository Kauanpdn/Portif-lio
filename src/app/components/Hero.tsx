import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgDev from '../assets/heroImg.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#16A34A]/10 rounded-full text-[#16A34A] text-sm font-medium">
              Disponível para novas oportunidades
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
              Full Stack Developer
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Especialista no ecossistema Java, com expertise em  <span className="text-[#16A34A] font-semibold">Spring Boot</span>, 
              <span className="text-[#16A34A] font-semibold"> React</span>, e 
              <span className="text-[#16A34A] font-semibold"> Angular</span>. 
              Desenvolvimento de aplicações escaláveis ​​e de nível empresarial com tecnologias modernas.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors flex items-center gap-2 shadow-lg shadow-[#16A34A]/20"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-[#0F172A] text-[#0F172A] rounded-lg hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a href="https://github.com/Kauanpdn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#16A34A] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kauan-pinheiro-do-nascimento/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#16A34A] transition-colors">
                <Linkedin size={20} />
              </a>
              {/* <a href="mailto:kauan.pnascimento750@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#16A34A] transition-colors">
                <Mail size={20} />
              </a> */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src={imgDev}
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Background Shapes */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#16A34A]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-[#0F172A]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
