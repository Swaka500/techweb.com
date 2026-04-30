const services = [
  {
    title: "Web Development",
    desc: "Modern, fast and scalable web applications for your business.",
    icon: "🌐"
  },
  {
    title: "Business Analysis",
    desc: "Improve decisions using data, process insights, and strategy.",
    icon: "📊"
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful and user-friendly designs that convert visitors.",
    icon: "🎨"
  },
  {
    title: "E-Commerce",
    desc: "Online stores that increase sales and customer experience.",
    icon: "🛒"
  }
]

const Services = () => {
  return (
    <section id="services"  className="py-20 bg-[#0b0f19] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
        Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                p-8 rounded-2xl bg-white/5 backdrop-blur-md 
                border border-white/10 transition duration-300 
                hover:bg-white/10 hover:shadow-lg
                hover:border-white/20 cursor-pointer
              "
            >
              <div className="text-4xl mb-5">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services