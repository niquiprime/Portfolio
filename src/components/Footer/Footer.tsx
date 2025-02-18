import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-swamp-900 text-swamp-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Nicolas. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
