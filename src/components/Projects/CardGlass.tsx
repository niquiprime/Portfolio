import React from "react";

interface CardGlassProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  imageSrc: string;
  technologies: string[];
  description: string;
}

const CardGlass: React.FC<CardGlassProps> = ({
  title,
  subtitle,
  imageSrc,
  technologies,
  description,
  children,
}) => {
  return (
    <div className="group bg-swamp-900/50 relative flex gap-6 overflow-hidden rounded-lg border border-white/10 p-6 backdrop-blur-lg transition-all">
      <div className="bg-swamp-500/10 group-hover:bg-swamp-500/20 absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl transition-all"></div>

      {/* Parte Izquierda del Card */}
      <div className="flex flex-1 flex-col">
        {/* Titulo */}
        <div className="mb-8 space-y-2">
          <h3 className="text-swamp-50 text-2xl font-bold">{title}</h3>
          <h4 className="text-swamp-50 text-xl">{subtitle}</h4>
          <p className="text-swamp-200">{description}</p>
        </div>
        {/* Tecnologias usadas */}
        <div className="mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="border-swamp-50/10 bg-swamp-600/20 hover:bg-swamp-600/30 mr-1.5 rounded-full border px-4 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Imagen Derecha */}
      <div className="flex-1">
        <img
          src={imageSrc}
          alt=""
          className="relative aspect-square w-full overflow-hidden rounded-lg md:object-cover"
        />
      </div>
    </div>
  );
};

export default CardGlass;
