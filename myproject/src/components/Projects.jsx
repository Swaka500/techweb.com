const projects = [
  {
    title: "Business Dashboard",
    desc: "Analytics dashboard for business performance tracking.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "E-Commerce Platform",
    desc: "Modern online store with payment integration.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Portfolio Website",
    desc: "Personal branding website for professionals.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Admin Panel",
    desc: "Secure admin system for managing data and users.",
    image: "https://via.placeholder.com/600x400",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects