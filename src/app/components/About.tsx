import { Code2, Database, Globe, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Expert",
      description: "Profundo conhecimento em Java e Spring Boot para a construção de APIs robustas."
    },
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Proficiente em React e Angular para aplicações web modernas."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Experiência com bancos de dados MySQL, PostgreSQL e NoSQL."
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Otimizando aplicações para velocidade e escalabilidade."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-[#16A34A] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou um desenvolvedor Full Stack apaixonado, com forte foco em desenvolvimento backend
              utilizando o ecossistema Java. Adoro construir aplicações escaláveis ​​e de fácil manutenção que
              resolvem problemas reais.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Com expertise em <span className="font-semibold text-[#16A34A]">Spring Boot</span>,
              crio APIs RESTful robustas e arquiteturas de microsserviços. No frontend, trabalho com 
              <span className="font-semibold text-[#16A34A]"> React</span> e
              <span className="font-semibold text-[#16A34A]"> Angular</span> para entregar experiências
              de usuário excepcionais.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Estou constantemente aprendendo e me mantendo atualizado com as tecnologias mais recentes
              e as melhores práticas em desenvolvimento de software. Acredito em escrever código limpo e bem testado, 
              seguindo os princípios SOLID.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-sm font-medium">
                Solucionador de problemas
              </span>
              <span className="px-4 py-2 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-sm font-medium">
                Trabalho em equipe
              </span>
              <span className="px-4 py-2 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-sm font-medium">
                Aprendizado rápido
              </span>
              <span className="px-4 py-2 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-sm font-medium">
                Mentalidade ágil
              </span>
              <span className="px-4 py-2 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-sm font-medium">
                Comunição efetiva 
              </span>
              <span className="px-4 py-2 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-sm font-medium">
                Criatividade 
              </span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#F8FAFC] rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-[#16A34A]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#16A34A] transition-colors">
                  <item.icon className="text-[#16A34A] group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
