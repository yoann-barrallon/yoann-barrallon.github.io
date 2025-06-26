export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Développeur Full-Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Passionné par le développement web, je crée des applications
              modernes et performantes. J'aime résoudre des problèmes complexes
              et apprendre de nouvelles technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              J'aime créer des applications robustes et performantes pour offrir
              la meilleure expérience utilisateur possible.
            </p>

            <div className="flex flex-wrap gap-3">
              {["ReactJS", "Javascript/Typescript", "PHP", "Laravel"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-200 dark:hover:bg-emerald-800/30 transition-colors"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Parcours académique
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">2022 - 2025 :</span> BUT
                  Informatique parcours conception d'applications, IUT de
                  Valence (26)
                </li>
                <li>
                  <span className="font-medium">2022 :</span> Baccalauréat
                  général, Lycée Saint-Denis, Annonay (07)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
