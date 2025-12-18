import React from "react";
import useTranslate from "../hooks/useTranslate";

export function Contact() {

  const { t } = useTranslate();

  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 min-h-[70vh]">
      <div className="w-full max-w-4xl p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("contact", "letsworktogether")}
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            {t("contact", "text")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-4">

            <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm text-gray-200 truncate">
              <span className="font-bold text-indigo-500 pr-2">Email:</span>
              polat131513@gmail.com
            </div>

            <a 
              href="https://github.com/Polat13" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center p-3 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm text-gray-200 hover:bg-white/10 transition-colors"
            >
              <span className="font-bold text-indigo-500 pr-2">Github:</span>
              https://github.com/Polat13
            </a>

            <a 
              href="https://www.linkedin.com/in/hüseyin-polat-çakmak" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center p-3 rounded-xl bg-white/5 border border-white/10 text-xs md:text-sm text-gray-200 hover:bg-white/10 transition-colors"
            >
              <span className="font-bold text-indigo-500 pr-2">LinkedIn:</span>
              hüseyin-polat-çakmak
            </a>
          </div>

          <div className="flex flex-col justify-between gap-6">

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 ">

              <div className="text-xs md:text-sm text-gray-200">
                <span className="font-bold text-indigo-500">
                  {t("contact", "number")}:
                </span>{" "}
                +90 533 275 68 13
              </div>

              <div className="text-xs md:text-sm text-gray-200">
                <span className="font-bold text-indigo-500">
                  {t("contact", "location")}:
                </span>{" "}
                Tire/İzmir
              </div>

            </div>

            <div className="flex justify-center">
              <a 
                href="mailto:polat131513@gmail.com"
                className="w-full md:w-auto text-center px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
              >
                {t("contact", "sendme")}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
