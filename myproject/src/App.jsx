import Navbar from "./components/Navbar"

import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Hero from "./components/Hero"



function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-bg"></div>

      
      <Navbar />
      <Hero />
      
      <About />
      
      
      <Services />
      <Footer />
      
    </div>
  )
}

export default App