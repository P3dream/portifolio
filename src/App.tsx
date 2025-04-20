import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Globe } from "lucide-react";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 font-sans">
        <Navbar />
        <div className="flex justify-end px-4 sm:px-6 pt-4">
          <div className="relative inline-block text-left">
            <div className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md px-3 py-2 shadow transition duration-200 cursor-pointer">
              <Globe className="w-4 h-4 text-gray-700" />
              <select
                onChange={handleChangeLanguage}
                value={i18n.language}
                className="appearance-none bg-transparent outline-none text-gray-900 font-medium pr-6 cursor-pointer"
              >
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>


        {/* Conteúdo principal */}
        <main className="px-4 sm:px-6 py-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* Footer responsivo */}
        <footer className="mt-12 py-6 text-center text-sm text-gray-400 border-t border-gray-600 px-4">
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/pedrocarneiropizzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/P3dream"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="mailto:pedropizzi23@hotmail.com"
              className="hover:text-gray-100"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} - {t("footer_text")}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
