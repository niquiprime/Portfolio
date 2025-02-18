import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaChevronDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Aurora from "./Aurora";

import FotoPerfil from "../../assets/Perfil.jpg";

const Hero: React.FC = () => {
  return (
    <section className="text-swamp-50 relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-1">
        <Aurora colorStops={["#75875b", "#5b6a46", "#475239"]} speed={0.75} />
      </div>

      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              Hola! soy <span className="text-swamp-300">Nicolás</span>
            </h1>
            <p className="text-swamp-100 mb-8 text-xl md:text-2xl">
              Desarrollador Full Stack especializado en crear experiencias
              digitales excepcionales
            </p>
            <nav className="flex gap-4" aria-label="Redes Sociales">
              <a
                href="#" // Replace with your GitHub URL
                className="bg-swamp-200 text-swamp-800 rounded-full p-2"
                aria-label="Perfil de GitHub"
              >
                <FaGithub className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#" // Replace with your GitHub URL
                className="bg-swamp-200 text-swamp-800 rounded-full p-2"
                aria-label="Perfil de Linkedin"
              >
                <FaLinkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#" // Replace with your GitHub URL
                className="bg-swamp-200 text-swamp-800 rounded-full p-2"
                aria-label="Correo Electrónico"
              >
                <MdEmail className="h-6 w-6" aria-hidden="true" />
              </a>
            </nav>
          </div>

          <div className="relative w-full md:w-1/3">
            <div className="border-swamp-300/20 aspect-square overflow-hidden rounded-full border-4 shadow-2xl">
              <img
                src={FotoPerfil}
                alt="Foto de perfil"
                className="h-full w-full object-cover"
                width="400"
                height="400"
              />
            </div>
            <div className="from-swamp-600/20 to-swamp-400/20 absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-r blur-2xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <FaChevronDown aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
