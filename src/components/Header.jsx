import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "experience", label: "Expériences" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = item.id;
          }
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        current = "contact";
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-300 drop-shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
          Yoann Barrallon
        </div>
        <div className="hidden md:flex space-x-8 justify-center flex-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 px-3 py-2 rounded-lg group ${
                activeSection === item.id
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 shadow-lg shadow-emerald-200 dark:shadow-emerald-800/50"
                  : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md"
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 transform transition-all duration-300 ${
                  activeSection === item.id
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="transform hover:scale-110 transition-all duration-300 hover:rotate-12">
            <ThemeToggle />
          </div>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block bg-emerald-600 dark:bg-emerald-500 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Voir mon CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-emerald-600 dark:to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 transform hover:scale-110 hover:rotate-180 ${
              isMenuOpen ? "rotate-90 bg-emerald-50 dark:bg-emerald-900/20" : ""
            }`}
            aria-label="Menu"
          >
            <svg
              className={`h-6 w-6 transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden transition-all duration-300 transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0 max-h-96"
            : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 px-4 font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-2 rounded-lg group ${
                activeSection === item.id
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen
                  ? "slideInFromLeft 0.3s ease-out forwards"
                  : "",
              }}
            >
              <span className="relative">
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 transform transition-all duration-300 ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
