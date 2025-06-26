import {
  SiReact,
  SiLaravel,
  SiInertia,
  SiTailwindcss,
  SiPhp,
  SiJavascript,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiJetbrains,
} from "react-icons/si";
import { FaWindows, FaLinux, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillsData = {
  Langages: ["Typescript/Javascript", "PHP", "CSS", "Java", "SQL", "WinDev"],
  "Frameworks/librairies": ["ReactJS", "Laravel", "InertiaJS", "Tailwind CSS"],
  "Base de données": ["PostgreSQL", "MySQL"],
  Outils: ["Git", "Docker", "VS Code", "Suite Jetbrains", "Windows", "Linux"],
};

const skillIcons = {
  ReactJS: <SiReact size={24} />,
  Laravel: <SiLaravel size={24} />,
  InertiaJS: <SiInertia size={24} />,
  "Tailwind CSS": <SiTailwindcss size={24} />,
  PHP: <SiPhp size={24} />,
  "Typescript/Javascript": <SiJavascript size={24} />,
  CSS: <SiCss3 size={24} />,
  Java: <FaJava size={24} />,
  SQL: <SiMysql size={24} />,
  PostgreSQL: <SiPostgresql size={24} />,
  MySQL: <SiMysql size={24} />,
  Git: <SiGit size={24} />,
  Docker: <SiDocker size={24} />,
  "VS Code": <VscVscode size={24} />,
  "Suite Jetbrains": <SiJetbrains size={24} />,
  Windows: <FaWindows size={24} />,
  Linux: <FaLinux size={24} />,
};

const skillsLinks = {
  ReactJS: "https://react.dev/",
  Laravel: "https://laravel.com/",
  InertiaJS: "https://inertiajs.com/",
  "Tailwind CSS": "https://tailwindcss.com/",
  PHP: "https://www.php.net/",
  "Typescript/Javascript": "https://www.typescriptlang.org/",
  CSS: "https://developer.mozilla.org/fr/docs/Web/CSS",
  Java: "https://www.java.com/",
  MySQL: "https://www.mysql.com/",
  PostgreSQL: "https://www.postgresql.org/",
  Git: "https://git-scm.com/",
  Docker: "https://www.docker.com/",
  "VS Code": "https://code.visualstudio.com/",
  "Suite Jetbrains": "https://www.jetbrains.com/",
  Windows: "https://www.microsoft.com/fr-fr/windows",
  Linux: "https://www.linux.org/",
  WinDev: "https://www.windev.fr/",
  SQL: "https://www.sql.sh/",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Compétences techniques
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-slate-700 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
                  >
                    {skillIcons[skill] && <span>{skillIcons[skill]}</span>}
                    <a
                      href={skillsLinks[skill]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 font-medium hover:underline hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      {skill}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
