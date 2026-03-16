import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-4">
              &lt;Dev<span className="text-[#16A34A]">Portfolio</span>/&gt;
            </div>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Full Stack especializado em Java, Spring Boot, React e Angular.
              Criação de aplicações escaláveis ​​com tecnologias modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#16A34A] transition-colors">
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#16A34A] transition-colors">
                  Tech Stack
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#16A34A] transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#16A34A] transition-colors">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#16A34A] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4">Tecnologias principais</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot','JavaScript', 'React', 'Angular', 'Node.js', 'MySQL', 'Docker', 'AWS'].map((tech, index) => (
                <span key={index} className="text-xs px-3 py-1 bg-[#16A34A]/20 text-[#16A34A] rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              © {currentYear} Developer Portfolio. Feito com <Heart size={16} className="text-[#16A34A]" fill="#16A34A" /> usando React & Tailwind CSS
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#16A34A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#16A34A] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
