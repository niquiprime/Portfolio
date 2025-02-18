import React from "react";
import { DiJavascript } from "react-icons/di";
import { FaNode, FaReact, FaPalette } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { IoGitMerge } from "react-icons/io5";

const skills = [
  {
    name: "Javascript",
    icon: <DiJavascript className="text-swamp-500 mb-2 h-8 w-8"></DiJavascript>,
    level: "Avanzado",
  },
  {
    name: "NodeJS",
    icon: <FaNode className="text-swamp-500 mb-2 h-8 w-8"></FaNode>,
    level: "Medio",
  },
  {
    name: "React",
    icon: <FaReact className="text-swamp-500 mb-2 h-8 w-8"></FaReact>,
    level: "Avanzado",
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="text-swamp-500 mb-2 h-8 w-8"></SiTypescript>,
    level: "Intermedio",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-swamp-500 mb-2 h-8 w-8"></SiMongodb>,
    level: "Básico",
  },
  {
    name: "Git",
    icon: <IoGitMerge className="text-swamp-500 mb-2 h-8 w-8"></IoGitMerge>,
    level: "Avanzado",
  },
  {
    name: "TaildWind CSS",
    icon: <FaPalette className="text-swamp-500 mb-2 h-8 w-8"></FaPalette>,
    level: "Intermedio",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-swamp-50 py-20">
      <div className="container mx-auto px-4">
        <h2
          id="skills-title"
          className="text-swamp-800 mb-12 text-left text-4xl font-bold"
        >
          Habilidades
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-lg bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex flex-col items-center">
                {React.cloneElement(skill.icon, { "aria-hidden": "true" })}
              </div>
              <h3 className="text-swamp-800 mb-2 font-semibold">
                {skill.name}
              </h3>
              <span
                className={`rounded-full px-3 py-1 text-sm ${
                  skill.level === "Avanzado"
                    ? "bg-swamp-200 text-swamp-800"
                    : skill.level === "Intermedio"
                      ? "bg-swamp-100 text-swamp-700"
                      : "bg-swamp-50 text-swamp-600"
                }`}
              >
                {skill.level}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
