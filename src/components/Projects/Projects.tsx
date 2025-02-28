import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import CardGlass from "./CardGlass";

const Projects: React.FC = () => {
  interface ProjectCardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    technologies: string[];
    description: string;
  }

  const ProjectsContent = [
    {
      title: "Proyecto 1",
      subtitle: "Subtítulo del Proyecto 1",
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      technologies: ["React", "Tailwind", "TypeScript"],
      description:
        "Una breve descripción del Proyecto 1 y las tecnologías utilizadas.",
    },
    {
      title: "Proyecto 2",
      subtitle: "Subtítulo del Proyecto 2",
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      technologies: ["Next.js", "CSS Modules", "JavaScript"],
      description:
        "Una breve descripción del Proyecto 2 y las tecnologías utilizadas.",
    },
    {
      title: "Proyecto 3",
      subtitle: "Subtítulo del Proyecto 3",
      imageSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      technologies: ["Gatsby", "GraphQL", "Sass"],
      description:
        "Una breve descripción del Proyecto 3 y las tecnologías utilizadas.",
    },
  ];

  return (
    <section className="py-20" id="projects" aria-labelledby="projects-title">
      <div className="container mx-auto px-4">
        <h2
          id="projects-title"
          className="text-swamp-50 mb-12 text-left text-4xl font-bold"
        >
          Mis Proyectos
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {ProjectsContent.map((project, index) => (
            <CardGlass
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              imageSrc={project.imageSrc}
              technologies={project.technologies}
              description={project.description}
            ></CardGlass>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
