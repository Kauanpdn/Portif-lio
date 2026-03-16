import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Entre em contato</h2>
          <div className="w-20 h-1 bg-[#16A34A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tem algum projeto em mente ou gostaria de discutir oportunidades? Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Informações de contato</h3>
              <p className="text-gray-600 mb-8">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#16A34A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#16A34A]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">Email</h4>
                  <a href="mailto:developer@example.com" className="text-gray-600 hover:text-[#16A34A] transition-colors">
                    kauan.pnascimento750@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#16A34A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#16A34A]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">Telefone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-[#16A34A] transition-colors">
                    +55 (11) 98237-1141
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#16A34A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#16A34A]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-1">Localização</h4>
                  <p className="text-gray-600">
                    São Paulo, SP
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-[#0F172A] mb-4">Conecte-se comigo</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Kauanpdn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#111827] text-white rounded-lg flex items-center justify-center hover:bg-[#16A34A] transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kauan-pinheiro-do-nascimento/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:bg-[#16A34A] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                {/* <a 
                  href="mailto:developer@example.com"
                  className="w-12 h-12 bg-[#16A34A] text-white rounded-lg flex items-center justify-center hover:bg-[#15803D] transition-colors"
                >
                  <Mail size={20} />
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-2">
                  Endereço de email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#0F172A] mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-[#16A34A]/20 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors flex items-center justify-center gap-2 font-medium shadow-lg shadow-[#16A34A]/20"
              >
                Enviar mensagem
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
