import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <section className="py-20" id="projects" aria-labelledby="projects-title">
      <div className="container mx-auto px-4">
        <h2
          id="projects-title"
          className="text-swamp-50 mb-12 text-left text-4xl font-bold"
        >
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <article
              key={project}
              className="group bg-swamp-50 overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60`}
                  alt={`Vista previa del Proyecto ${project}`}
                  className="h-48 w-full object-cover"
                  width="800"
                  height="400"
                />
                <div className="bg-swamp-900 bg-opacity-50 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-70">
                  <FaExternalLinkAlt
                    className="text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="text-swamp-950 p-6">
                <h3>Proyecto {project}</h3>
                <p className="text-swamp-600 mb-4">
                  Una breve descripción del proyecto y las tecnologías
                  utilizadas.
                </p>
                <div className="flex gap-2">
                  <span className="bg-swamp-100 text-swamp-700 rounded-full px-3 py-1 text-sm">
                    React
                  </span>
                  <span className="bg-swamp-100 text-swamp-700 rounded-full px-3 py-1 text-sm">
                    Taildwind
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
