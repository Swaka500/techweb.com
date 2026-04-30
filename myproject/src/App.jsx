import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import Terms from "./pages/Terms"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  )
}

export default App