import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type NavbarProps = {
  languageSelector?: ReactNode;
};

const Navbar = ({ languageSelector }: NavbarProps) => {
  const { t } = useTranslation();
  const navItems = [
    { to: "/about", label: t("about_title") },
    { to: "/projects", label: t("projects_title") },
    { to: "/research-engineering", label: t("research_nav_title") },
    { to: "/certificates", label: t("certificates_title") },
    { to: "/resume", label: t("resume_title") },
  ];

  return (
    <header className="relative z-50 px-4 pt-4 text-gray-100 sm:px-6">
      <nav className="relative mx-auto flex max-w-6xl flex-col gap-4 rounded-xl border border-slate-600/80 bg-slate-800/70 px-4 py-4 shadow-lg backdrop-blur sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/about" className="text-xl font-semibold tracking-wide text-gray-50">
            {t("header")}
          </NavLink>
          <div className="lg:hidden">{languageSelector}</div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
          <div className="flex flex-wrap gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 transition",
                    isActive
                      ? "bg-slate-700 text-white"
                      : "text-gray-300 hover:bg-slate-700/70 hover:text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">{languageSelector}</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
