import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-swamp-100 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Nicolás Urrea. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
