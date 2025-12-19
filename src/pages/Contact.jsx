import React from "react";
import useTranslate from "../hooks/useTranslate";

export function Contact() {
  const { t } = useTranslate();

  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 min-h-[70vh]">
      <div className="w-full max-w-4xl p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white [text-shadow:0_0_3px_black]">
            {t("contact", "letsworktogether")}
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto [text-shadow:0_0_2px_black]">
            {t("contact", "text")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-4">

            <div className="flex items-center p-3 rounded-xl 
              bg-white/10 backdrop-blur-md 
              border border-white/30 
              text-xs md:text-sm text-gray-100 truncate">
              <span className="font-semibold text-indigo-200 pr-2 [text-shadow:0_0_1px_black]">
                Email:
              </span>
              polat131513@gmail.com
            </div>

            <a
              href="https://github.com/Polat13"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-3 rounded-xl 
              bg-white/10 backdrop-blur-md 
              border border-white/30 
              text-xs md:text-sm text-gray-100 
              hover:bg-white/20 transition-all">
              <span className="font-semibold text-indigo-200 pr-2 [text-shadow:0_0_1px_black]">
                Github:
              </span>
              https://github.com/Polat13
            </a>

            <a
              href="https://www.linkedin.com/in/hüseyin-polat-çakmak"
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-3 rounded-xl 
              bg-white/10 backdrop-blur-md 
              border border-white/30 
              text-xs md:text-sm text-gray-100 
              hover:bg-white/20 transition-all">
              <span className="font-semibold text-indigo-200 pr-2 [text-shadow:0_0_1px_black]">
                LinkedIn:
              </span>
              Hüseyin Polat Çakmak
            </a>

          </div>

          <div className="flex flex-col gap-4 items-end w-full">
            <div className="w-full md:w-60 flex items-center gap-2 p-3 rounded-xl 
              bg-white/10 backdrop-blur-md 
              border border-white/30 
              text-xs md:text-sm text-gray-100">
              <span className="font-semibold text-indigo-200 [text-shadow:0_0_1px_black]">
                {t("contact", "number")}:
              </span>
              +90 533 275 68 13
            </div>

            <div className="w-full md:w-60 flex items-center gap-2 p-3 rounded-xl 
              bg-white/10 backdrop-blur-md 
              border border-white/30 
              text-xs md:text-sm text-gray-100">
              <span className="font-semibold text-indigo-200 [text-shadow:0_0_1px_black]">
                {t("contact", "location")}:
              </span>
              Tire/İzmir
            </div>

            <a
              href="mailto:polat131513@gmail.com"
              className="px-13 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 
              text-white font-semibold shadow-lg shadow-indigo-500/20 
              transition-all active:scale-95 self-end">
              {t("contact", "sendme")}
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
