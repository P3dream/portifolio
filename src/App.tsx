import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope /* , FaYoutube */ } from "react-icons/fa";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import YoutubeChannel from "./pages/YoutubeChannel";
import CertificatesPage from "./pages/Certificates";
import ResearchEngineering from "./pages/ResearchEngineering";
import { Analytics } from "@vercel/analytics/react";
import PageTracker from "./analytics/PageTracker";
import { analytics } from "./analytics/events";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language;
  }, [i18n.resolvedLanguage, i18n.language]);

  const languages = [
    { value: "en", label: "English" },
    { value: "pt", label: "Português" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
  ];
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;
  const activeLanguageLabel =
    languages.find((language) => language.value === activeLanguage)?.label ?? "English";

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  const languageSelector = (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsLanguageMenuOpen((isOpen) => !isOpen)}
        className="flex min-h-10 items-center gap-2 rounded-md border border-slate-600 bg-slate-800/80 px-3 py-2 text-sm font-medium text-gray-100 shadow-sm transition duration-200 hover:border-slate-400 hover:bg-slate-800"
        aria-haspopup="listbox"
        aria-expanded={isLanguageMenuOpen}
        aria-label={t("select_language")}
      >
        <Globe className="h-4 w-4 text-gray-300" aria-hidden="true" />
        <span>{activeLanguageLabel}</span>
      </button>

      {isLanguageMenuOpen && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-slate-600 bg-slate-800 shadow-xl"
        >
          {languages.map((language) => {
            const isActive = language.value === activeLanguage;

            return (
              <button
                key={language.value}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleChangeLanguage(language.value)}
                className={`block w-full px-3 py-2 text-left text-sm transition ${
                  isActive
                    ? "bg-slate-700 text-white"
                    : "text-gray-200 hover:bg-slate-700/80 hover:text-white"
                }`}
              >
                {language.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <Router>
      <PageTracker />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 font-sans">
        <Navbar languageSelector={languageSelector} />

        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research-engineering" element={<ResearchEngineering />} />
            <Route path="/youtubeChannel" element={<YoutubeChannel />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>

        <footer className="mt-12 border-t border-slate-700 px-4 py-6 text-center text-sm text-gray-400">
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/pedrocarneiropizzi/"
              onClick={analytics.clickLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("aria_linkedin")}
              className="hover:text-gray-100"
            >
              <FaLinkedin className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/P3dream"
              onClick={analytics.clickGithub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("aria_github")}
              className="hover:text-gray-100"
            >
              <FaGithub className="h-6 w-6" aria-hidden="true" />
            </a>
            {/* <a
              href="https://www.youtube.com/@PizziDev"
              onClick={analytics.clickYoutube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("aria_youtube")}
              className="hover:text-red-500"
            >
              <FaYoutube className="h-6 w-6" aria-hidden="true" />
            </a> */}
            <a
              href="mailto:pedropizzi23@hotmail.com"
              onClick={analytics.clickEmail}
              aria-label={t("aria_email")}
              className="hover:text-gray-100"
            >
              <FaEnvelope className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} - {t("footer_text")}</p>
        </footer>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
