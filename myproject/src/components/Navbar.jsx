import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)

  // detect scroll (only works on Home page)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll("section[id]")
      let found = ""

      sections.forEach((section) => {
        const top = window.scrollY
        const offset = section.offsetTop - 120
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (top >= offset && top < offset + height) {
          found = id
        }
      })

      if (found) setActive(found)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  const linkStyle = (id) =>
    `cursor-pointer transition hover:text-red-500 ${
      active === id ? "text-red-500" : "text-gray-300"
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black/70 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO (CLICK = HOME) */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-red-600 text-white font-bold rounded-full">
            D
          </div>

          <div>
            <p className="font-semibold text-white leading-tight">
              Derrick Digital
            </p>
            <p className="text-xs text-gray-400">
              Innovation & Technology
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">

          {/* HOME LINK */}
          <Link to="/" className="text-gray-300 hover:text-red-500">
            Home
          </Link>

          {/* SCROLL LINKS */}
          <button
            onClick={() => scrollToSection("services")}
            className={linkStyle("services")}
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className={linkStyle("projects")}
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("booking")}
            className={linkStyle("booking")}
          >
            Booking
          </button>

          {/* PAGE LINKS */}
          <Link
            to="/faq"
            className="text-gray-300 hover:text-red-500 transition"
          >
            FAQs
          </Link>

          <Link
            to="/terms"
            className="text-gray-300 hover:text-red-500 transition"
          >
            Terms
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4 font-medium">

          {/* HOME */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-red-500"
          >
            Home
          </Link>

          {/* SCROLL LINKS */}
          <button
            onClick={() => scrollToSection("services")}
            className="block text-gray-300 hover:text-red-500"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="block text-gray-300 hover:text-red-500"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("booking")}
            className="block text-gray-300 hover:text-red-500"
          >
            Booking
          </button>

          {/* PAGE LINKS */}
          <Link
            to="/faq"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-red-500"
          >
            FAQs
          </Link>

          <Link
            to="/terms"
            onClick={() => setOpen(false)}
            className="block text-gray-300 hover:text-red-500"
          >
            Terms
          </Link>

        </div>
      )}
    </header>
  )
}

export default Navbar