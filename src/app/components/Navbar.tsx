import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-[#0F172A]">
            &lt;Dev<span className="text-[#16A34A]">Portfolio</span>/&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#16A34A] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#16A34A] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('tech-stack')} className="text-gray-700 hover:text-[#16A34A] transition-colors">
              Tech Stack
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#16A34A] transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-[#16A34A] transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#16A34A] transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('tech-stack')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Tech Stack
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
