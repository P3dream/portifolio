import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-slate-800 text-gray-100 px-6 py-4 flex justify-between items-center shadow-md rounded-xl mb-8">
      <h1 className="text-2xl font-semibold tracking-wide">{t("header")}</h1>
      <div className="space-x-6 text-sm font-medium">
        <Link to="/about" className="hover:text-white hover:underline transition">{t("about_title")}</Link>
        <Link to="/blog" className="hover:text-white hover:underline transition">{t("blog_title")}</Link>
        <Link to="/projects" className="hover:text-white hover:underline transition">{t("projects_title")}</Link>
        <Link to="/resume" className="hover:text-white hover:underline transition">{t("resume_title")}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
