export function TechStack() {
  const technologies = [
    {
      name: "Java",
      icon: "☕",
      category: "Backend"
    },
    {
      name: "Spring Boot",
      icon: "🍃",
      category: "Backend"
    },
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend"
    },
    {
      name: "Angular",
      icon: "🅰️",
      category: "Frontend"
    },
    {
      name: "Node.js",
      icon: "💚",
      category: "Backend"
    },
    {
      name: "MySQL",
      icon: "🐬",
      category: "Database"
    },
    {
      name: "Docker",
      icon: "🐳",
      category: "DevOps"
    },
    {
      name: "Git",
      icon: "📦",
      category: "Tools"
    },
    {
      name: "AWS",
      icon: "☁️",
      category: "Cloud"
    },
    {
      name: "TypeScript",
      icon: "📘",
      category: "Frontend"
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      category: "Database"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      category: "Database"
    },
    {
      name: "JavaScript",
      icon: "🟨",
      category: "Programming language"
    },
    {
      name: "React-Native",
      icon: "⚛",
      category: "Mobile"
    },
    {
      name: "Python",
      icon: "🐍",
      category: "Programming language"
    },
    {
      name: "Php",
      icon: "🐘",
      category: "Programming language"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-[#16A34A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para dar vida às ideias.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-gray-200 hover:border-[#16A34A] group"
            >
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{tech.name}</h3>
                <span className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">Competências Essenciais</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { skill: "Java & Spring Boot", level: 95 },
              { skill: "React & Angular", level: 90 },
              { skill: "RESTful API Design", level: 95 },
              { skill: "Database Management", level: 85 },
              { skill: "Cloud Services (AWS)", level: 80 },
              { skill: "DevOps & CI/CD", level: 75 }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-[#0F172A]">{item.skill}</span>
                  <span className="text-[#16A34A] font-semibold">{item.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#16A34A] to-[#22C55E] rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
