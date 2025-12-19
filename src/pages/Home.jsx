import React from "react";
import { useNavigate } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

export function Home() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[60vh] px-4">
      
      <div className="inline-flex flex-col items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 sm:px-10 py-3 sm:py-4 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.6)] mb-6">
        <h1 className="text-base sm:text-xl font-semibold text-white tracking-wide">
          Hüseyin Polat Çakmak
        </h1>
      </div>

      <div className="space-y-2">
        <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-indigo-300 drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]">
          {t("home", "frontendDeveloper")}
        </p>

        <p className="max-w-md sm:max-w-xl text-sm sm:text-base text-gray-200 leading-relaxed px-2 drop-shadow-[0_0_6px_rgba(0,0,0,0.85)]">
          {t("home", "explanation")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-10 w-full sm:w-auto">

        <button
          onClick={() => navigate("/project")}
          className="w-full sm:w-32 px-6 py-2.5 rounded-lg text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600 active:scale-95 transition-all shadow-lg"
        >
          {t("home", "projects")}
        </button>

        <button
          onClick={() => navigate("/about")}
          className="w-full sm:w-32 px-6 py-2.5 rounded-lg text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600 active:scale-95 transition-all shadow-lg"
        >
          {t("home", "abouts")}
        </button>

      </div>
    </section>
  );
}

export default Home;
