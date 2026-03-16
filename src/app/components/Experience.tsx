import { GraduationCap, Briefcase, Award } from 'lucide-react';

export function Experience() {
  const timeline = [
    {
      icon: GraduationCap,
      title: "Técnico Em Informática Para Internet",
      organization: "Senac",
      period: "2023 - 2024",
      description: "Desenvolvimento Full-Stack e Mobile utilizando JavaScript, com aprendizado e prática em todas as etapas do desenvolvimento de software, incluindo planejamento, desenvolvimento, testes e deploy.",
      type: "education"
    },
    {
      icon: Briefcase,
      title: "Desenvolvedor Front-End",
      organization: "Autônomo | Freelancer",
      period: "2025 - 2026",
      description: "Desenvolvimento de landing page profissional para apresentação dos serviços de consultoria fitness e aulas personalizadas com foco em posicionamento digital e captação de novos alunos.",
      type: "work"
    },
    {
      icon: Award,
      title: "Java do básico ao avançado",
      organization: "Hora de codar",
      period: "2025 - 2026",
      description: "Desde os conceitos mais básicos até os mais complexos aprendidos em java desenvolvendo APIs RESTful e serviços de backend",
      type: "certification"
    },
    {
      icon: GraduationCap,
      title: "Bacharelado em Ciência da Computação",
      organization: "Estácio",
      period: "2024 - presente",
      description: "Com foco em engenharia de software, estruturas de dados, algoritmos e desenvolvimento web. Graduando com honras.",
      type: "education"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Experiência e Educação</h2>
          <div className="w-20 h-1 bg-[#16A34A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Minha jornada no desenvolvimento de software e aprendizado contínuo.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-[#16A34A] flex items-center justify-center z-10 shadow-lg">
                    <item.icon className="text-[#16A34A]" size={24} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-[#0F172A] text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-[#16A34A] font-medium">
                            {item.organization}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === 'education' ? 'bg-blue-100 text-blue-700' :
                          item.type === 'work' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3 font-medium">
                        {item.period}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Habilidades Profissionais</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h4 className="font-semibold text-[#0F172A] mb-2">Excelência Técnica</h4>
              <p className="text-gray-600 text-sm">
                Escrever código limpo e de fácil manutenção, seguindo as melhores práticas e padrões de projeto.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="font-semibold text-[#0F172A] mb-2">Colaboração em equipe</h4>
              <p className="text-gray-600 text-sm">
                Comunicação e colaboração eficazes em ambientes de desenvolvimento ágil.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#16A34A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="font-semibold text-[#0F172A] mb-2">Aprendizagem Contínua</h4>
              <p className="text-gray-600 text-sm">
                Manter-se atualizado com as tecnologias mais recentes e as tendências do setor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
