const About = () => {
  return (
    <section id="about" className="relative py-28 px-6 text-white overflow-hidden">

      {/* glowing background blob */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-30 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Derrick Digital
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I create modern digital agency helping businesses transform ideas
            into powerful digital products. From Business analysis to enterprise
            platforms, I design, build and scale solutions that deliver
            real results.
          </p>

          <p className="text-gray-400">
            My mission is to build fast, modern and beautiful software
            that helps companies grow in the digital era.
          </p>
        </div>

        {/* RIGHT SIDE GLASS STATS */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-blue-400">3+</h3>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-blue-400">20+</h3>
            <p className="text-gray-300 mt-2">Projects Built</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-blue-400">100%</h3>
            <p className="text-gray-300 mt-2">Client Satisfaction</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-4xl font-bold text-blue-400">24/7</h3>
            <p className="text-gray-300 mt-2">Support</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About