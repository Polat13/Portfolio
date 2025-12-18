import React from "react";
import useTranslate from "./hooks/useTranslate";

export function Footer() {
  const { t, } = useTranslate();
  return (
    <footer className="w-full py-6 px-4 text-xs text-gray-300 bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
        <span className="text-center">
          © 2025 Hüseyin Polat Çakmak
        </span>
        <span className="hidden md:inline">—</span>
        <span>{t("footer","builtbyme")}</span>
      </div>
    </footer>
  );
}

export default Footer;