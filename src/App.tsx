import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";

function App() {
  return (
    <div className="min-h-screen bg-bg text-txt-primary">
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />

        {/* Placeholder sections */}
        <section id="projects" className="min-h-screen" />
        <section id="contact" className="min-h-screen" />
      </main>
    </div>
  );
}

export default App;
