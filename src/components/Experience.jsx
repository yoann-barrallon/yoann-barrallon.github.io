const experiences = [
  {
    id: 1,
    title: "Alternant développeur WinDev",
    company: "IIEESS",
    period: "2024 - Présent",
    description: "Développement d'applications métiers avec WinDev.",
    achievements: [
      "Ajouts de nouveaux modules",
      "Maintenance de l'application",
    ],
  },
  {
    id: 2,
    title: "Stagiaire développeur WinDev",
    company: "Diagram Informatique",
    period: "avril 2024 - juin 2024",
    description: "Création d'un module de charge de travail",
    achievements: ["Développement d'un module de charge de travail", "ttt"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Expériences professionnelles
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-lg">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Réalisations clés :
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-emerald-600 dark:text-emerald-400 mr-3 mt-1">
                        •
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
