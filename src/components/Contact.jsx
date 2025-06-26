import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yoann.barrallon0@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Message disparaît après 2s
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contactez-moi
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Intéressé par une collaboration ? N'hésitez pas à me contacter pour
          discuter de vos projets ou opportunités.
        </p>

        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-12 max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">📧</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Envoyez-moi un email
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Je vous répondrai dans les plus brefs délais
            </p>
          </div>

          <button onClick={handleCopy}>
            <a
              href="mailto:yoann.barrallon0@gmail.com"
              onClick={handleCopy}
              className="inline-flex items-center w-full sm:w-auto px-4 py-2 sm:px-8 sm:py-4 bg-emerald-600 dark:bg-emerald-500 text-white text-lg font-medium rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors break-all justify-center"
            >
              <span className="mr-3">📨</span>
              {copied ? "Email copié !" : "yoann.barrallon0@gmail.com"}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
