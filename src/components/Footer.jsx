export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          © 2025 Fait avec ❤️ et Astro + React
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yoann-barrallon"
            className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yoann-barrallon/"
            className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
