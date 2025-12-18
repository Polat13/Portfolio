import React from "react";
import { NavLink } from "react-router-dom";
import useTranslate from "./hooks/useTranslate";

const navItems = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "contact", to: "/contact" },
  { key: "project", to: "/project" },
];

export function Navbar() {
  const { t, lang, setLang } = useTranslate(); 

  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center justify-between gap-6 h-10 rounded-full bg-white px-6 shadow-lg md:w-110  ">
        <nav className="flex items-center gap-6 pl-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm transition-colors",
                  isActive
                    ? "font-semibold text-black"
                    : "font-normal text-gray-700 hover:text-black",
                ].join(" ")
              }
            >
              {t("navbar", item.key)}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setLang(lang === "EN" ? "TR" : "EN")}
          className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
        >
          {t("navbar", "language")}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
