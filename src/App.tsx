import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <div className="bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(117,135,91,0.3),rgba(255,255,255,0))]">
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
