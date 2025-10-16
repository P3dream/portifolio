import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-slate-800 text-gray-100 px-4 py-6 shadow-md rounded-xl mb-8 flex flex-col items-center text-center">
      {/* Nome (título) */}
      <h1 className="text-2xl font-bold tracking-wide mb-4">
        {t("header")}
      </h1>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
        <Link to="/about" className="hover:text-white hover:underline transition">
          {t("about_title")}
        </Link>
        <Link to="/youtubeChannel" className="hover:text-white hover:underline transition">
          {t("blog_title")}
        </Link>
        <Link to="/projects" className="hover:text-white hover:underline transition">
          {t("projects_title")}
        </Link>
        <Link to="/certificates" className="hover:text-white hover:underline transition">
          {t("certificates_title")}
        </Link>
        <Link to="/resume" className="hover:text-white hover:underline transition">
          {t("resume_title")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
