import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import TechStack from './components/sections/TechStack'
import Projects from './components/sections/Projects'

function App() {
  return (
    <div className="min-h-screen bg-bg text-txt-primary">
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />

        {/* Placeholder */}
        <section id="contact" className="min-h-screen" />
      </main>
    </div>
  )
}

export default App