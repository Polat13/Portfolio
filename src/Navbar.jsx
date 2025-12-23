import React from "react";
import { NavLink } from "react-router-dom";
import useTranslate from "./hooks/useTranslate";

const navItems = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "contact", to: "/contact" },
  //{ key: "project", to: "/project" },
];

export function Navbar() {
  const { t, lang, setLang } = useTranslate();

  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center justify-between gap-6 h-11 rounded-full bg-white/5 border border-white/10 px-6 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.6)] w-86 md:w-120 ">
        <nav className="flex items-center gap-4 pl-4 md:gap-8 md:pl-14">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm md:text-base transition-colors",
                  isActive
                    ? "font-semibold text-white md:text-lg"
                    : "font-normal text-gray-200 hover:text-white md:text-gray-300",
                ].join(" ")
              }>
              {t("navbar", item.key)}
            </NavLink>
          ))}
        </nav>


        <button
          type="button"
          onClick={() => setLang(lang === "EN" ? "TR" : "EN")}
          className="relative flex items-center h-7 w-17 rounded-full bg-indigo-500 transition-colors duration-300 hover:bg-indigo-600 overflow-hidden px-1">
          <span
            className={`  h-5 w-7 bg-gray-700 rounded-full flex items-center justify-center text-[10px] font-semibold text-white transition-transform duration-300
          ${lang === "EN" ? "translate-x-0" : "translate-x-8"}`}>
            {lang === "EN" ? "EN" : "TR"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
