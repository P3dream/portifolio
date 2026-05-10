import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type NavbarProps = {
  languageSelector?: ReactNode;
};

const Navbar = ({ languageSelector }: NavbarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { to: "/about", label: t("about_title") },
    { to: "/projects", label: t("projects_title") },
    { to: "/research-engineering", label: t("research_nav_title") },
    { to: "/certificates", label: t("certificates_title") },
    { to: "/resume", label: t("resume_title") },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "rounded-md px-3 py-2 transition",
      isActive
        ? "bg-slate-700 text-white"
        : "text-gray-300 hover:bg-slate-700/70 hover:text-white",
    ].join(" ");

  return (
    <header className="relative z-50 px-4 pt-4 text-gray-100 sm:px-6">
      <nav className="relative mx-auto flex max-w-6xl flex-col gap-3 rounded-xl border border-slate-600/80 bg-slate-800/70 px-3 py-3 shadow-lg backdrop-blur sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <NavLink
            to="/about"
            className="min-w-0 flex-1 truncate text-lg font-semibold tracking-wide text-gray-50 sm:text-xl lg:flex-none"
          >
            {t("header")}
          </NavLink>
          <div className="shrink-0 lg:hidden">{languageSelector}</div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-600 bg-slate-800/80 text-gray-100 transition hover:border-slate-400 hover:bg-slate-800 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? t("close_navigation_menu") : t("open_navigation_menu")}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col gap-3 lg:flex lg:flex-row lg:items-center lg:justify-end`}
        >
          <div className="grid grid-cols-1 gap-2 text-sm font-medium min-[380px]:grid-cols-2 lg:flex lg:flex-wrap">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
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
