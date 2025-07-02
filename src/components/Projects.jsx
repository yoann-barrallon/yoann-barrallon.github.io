const projects = [
  {
    id: 1,
    title:
      "Gestion de candidatures aux offres d'emploi (JobZen) (En cours de développement)",
    description:
      "Application web permettant de gérer les candidatures aux offres d'emploi.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "#",
    demo: "#",
    image: "💼",
    demoDisabled: true,
    githubDisabled: true,
  },
  {
    id: 2,
    title: "Gestion de stock (En cours de développement)",
    description:
      "Application de gestion de stock open source. Elle permet de gérer les stocks et commandes.",
    technologies: ["Laravel", "ReactJS", "PostgreSQL"],
    github: "https://github.com/yoann-barrallon/inventory-management",
    demo: "https://gestion-stock.yoann-barrallon.fr",
    image: "📊",
    demoDisabled: true,
    githubDisabled: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Mes Projets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl  overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {!project.githubDisabled ? (
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 border border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 transition-colors text-center font-medium"
                  >
                    Code
                  </a>
                  ) : null}
                  {!project.demoDisabled ? (
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors text-center font-medium"
                  >
                    Demo
                  </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
