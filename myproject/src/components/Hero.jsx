import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"

import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"
import hero5 from "../assets/hero5.jpg"
import hero6 from "../assets/hero6.jpg"
import hero7 from "../assets/hero7.jpg"
import hero10 from "../assets/hero10.jpg"

const Hero = () => {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero10]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <img
        src={images[current]}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Soft dark overlay (more premium) */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl py-32">

          {/* Badge (softer style) */}
          <div className="inline-block px-4 py-2 mb-6 text-xs tracking-widest text-gray-300 border border-gray-600 rounded-full">
            WELCOME TO DERRICK DIGITAL
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Your <span className="text-red-500">Vision</span>, <br />
            My Expertise.
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Transform your business with modern, scalable digital solutions
            that drive real growth and impact.
          </p>

          {/* Typing */}
          <div className="mt-8 text-lg md:text-xl text-gray-300">
            <span className="text-gray-400 tracking-widest text-sm">
              SPECIALIZING IN
            </span>

            <span className="text-red-400 font-semibold ml-3">
              <TypeAnimation
                sequence={[
                  "Business Websites",
                  2000,
                  "Web Applications",
                  2000,
                  "Business Analysis",
                  2000,
                  "UI/UX Design",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-md font-medium transition">
              Get Started
            </button>

            <button className="border border-gray-500 hover:border-red-500 px-7 py-3 rounded-md transition text-white">
              View Projects
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero