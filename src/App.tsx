import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope /* , FaYoutube */ } from 'react-icons/fa';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Globe } from "lucide-react";
import YoutubeChannel from "./pages/YoutubeChannel";
import CertificatesPage from "./pages/Certificates";
import { Analytics } from '@vercel/analytics/react';
import PageTracker from "./analytics/PageTracker";
import { analytics } from "./analytics/events";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language;
  }, [i18n.resolvedLanguage, i18n.language]);

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Router>
      <PageTracker />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 font-sans">
        <Navbar />
        <div className="flex justify-end px-4 sm:px-6 pt-4">
          <div className="relative inline-block text-left">
            <div className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 rounded-md px-3 py-2 shadow transition duration-200 cursor-pointer">
              <Globe className="w-4 h-4 text-gray-200" aria-hidden="true" />
              <label htmlFor="language-select" className="sr-only">
                {t("select_language")}
              </label>
              <select
                id="language-select"
                onChange={handleChangeLanguage}
                value={i18n.resolvedLanguage ?? i18n.language}
                aria-label={t("select_language")}
                className="appearance-none bg-gray-800/90 outline-none text-gray-100 font-medium pr-6 cursor-pointer hover:bg-gray-700/90"
              >
                <option value="en" className="bg-gray-800">English</option>
                <option value="pt" className="bg-gray-800">Português</option>
                <option value="es" className="bg-gray-800">Español</option>
                <option value="fr" className="bg-gray-800">Français</option>
              </select>
            </div>
          </div>
        </div>


        <main className="px-4 sm:px-6 py-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/youtubeChannel" element={<YoutubeChannel/>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>

        <footer className="mt-12 py-6 text-center text-sm text-gray-400 border-t border-gray-600 px-4">
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/pedrocarneiropizzi/"
              onClick={analytics.clickLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("aria_linkedin")}
              className="hover:text-gray-100"
            >
              <FaLinkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/P3dream"
              onClick={analytics.clickGithub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("aria_github")}
              className="hover:text-gray-100"
            >
              <FaGithub className="w-6 h-6" aria-hidden="true" />
            </a>
            {/* <a
              href="https://www.youtube.com/@PizziDev"
              onClick={analytics.clickYoutube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("aria_youtube")}
              className="hover:text-red-500"
            >
              <FaYoutube className="w-6 h-6" aria-hidden="true" />
            </a> */}
            <a
              href="mailto:pedropizzi23@hotmail.com"
              onClick={analytics.clickEmail}
              aria-label={t("aria_email")}
              className="hover:text-gray-100"
            >
              <FaEnvelope className="w-6 h-6" aria-hidden="true" />
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
