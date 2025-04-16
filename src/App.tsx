import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 font-sans">
        <Navbar />

        <div className="flex justify-end px-6 pt-4">
          <select
            onChange={handleChangeLanguage}
            value={i18n.language}
            className="rounded-md border border-gray-600 shadow bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition duration-200"
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <main className="px-6 py-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <footer className="mt-12 py-6 text-center text-sm text-gray-400 border-t border-gray-600">
          <div className="space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/pedrocarneiropizzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100"
            >
              <FaLinkedin className="inline-block w-6 h-6" />
            </a>
            <a
              href="https://github.com/P3dream"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100"
            >
              <FaGithub className="inline-block w-6 h-6" />
            </a>
            <a
              href="mailto:pedropizzi23@hotmail.com"
              className="hover:text-gray-100"
            >
              <FaEnvelope className="inline-block w-6 h-6" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} - {t("footer_text")}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
