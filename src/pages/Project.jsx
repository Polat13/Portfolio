import React from "react";
import controlImg from "../assets/project/control.webp";
import polAppImg from "../assets/project/PolApp.webp";
import useTranslate from "../hooks/useTranslate";

export function Projects() {

  const { t } = useTranslate();

  const myProjects = [
    { id: 1, key: "controlpanel", image: controlImg },
    { id: 2, key: "polApp", image: polAppImg },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        
        {myProjects.map((project) => (
          <div 
            key={project.id}
            className="flex flex-col gap-5 p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:bg-white/10 group"
          >
            <div className="relative w-full h-0 pb-[65%] rounded-2xl overflow-hidden bg-black/20 border border-white/5">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={t("project", project.key)} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm italic">
                  Image not found
                </div>
              )}
            </div>
            <div className="flex items-center px-2 pb-2">
              <h3 className="text-xl font-semibold text-white/90 tracking-tight transition-colors group-hover:text-indigo-400">
                {t("project", project.key)}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;
