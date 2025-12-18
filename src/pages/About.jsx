import React from "react";
import reactIcon from "../assets/icons/react.svg";
import jsIcon from "../assets/icons/javascript.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import nodeIcon from "../assets/icons/nodedotjs.svg";
import jqueryIcon from "../assets/icons/jquery.svg";
import cplusIcon from "../assets/icons/cplusplus.svg";
import githubIcon from "../assets/icons/github.svg";
import figmaIcon from "../assets/icons/figma.svg";
import useTranslate from "../hooks/useTranslate";

export function About() {
  const { t } = useTranslate();

  const skills = [
    { name: "React", src: reactIcon },
    { name: "JavaScript", src: jsIcon },
    { name: "Tailwind", src: tailwindIcon },
    { name: "Node.js", src: nodeIcon },
    { name: "jQuery", src: jqueryIcon },
    { name: "C++", src: cplusIcon },
    { name: "GitHub", src: githubIcon },
    { name: "Figma", src: figmaIcon },
  ];
  
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10 shadow-2xl flex flex-col justify-between">
          <div>
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              {t("about", "whoIam")}
            </span>

            <h2 className="text-xl sm:text-2xl font-bold text-white mt-4 mb-4">
              {t("about", "my")}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {t("about", "explanation")}
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="/path-to-your-cv.pdf" 
              className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group"
            >
              {t("about", "downloadcv")}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl  hover:bg-white/10">
          <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
            {t("about", "skills")}
          </span>
      
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <img 
                  src={skill.src} 
                  alt={skill.name} 
                  className="w-10 h-10 mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  style={{ filter: "brightness(0) invert(1)" }} 
                />
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
