import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-16 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Derrick Digital
            </h2>

            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Building modern digital experiences with clean design,
              performance and innovation in mind.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-5 mt-6 text-xl">
              <FaFacebook className="hover:text-red-500 hover:scale-110 transition cursor-pointer" />
              <FaTwitter className="hover:text-red-500 hover:scale-110 transition cursor-pointer" />
              <FaLinkedin className="hover:text-red-500 hover:scale-110 transition cursor-pointer" />
              <FaGithub className="hover:text-red-500 hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Contact"].map((item, i) => (
                <li key={i}>
                  <a className="hover:text-red-500 transition cursor-pointer relative group">
                    {item}
                    <span className="block h-[1px] w-0 group-hover:w-full transition-all bg-red-500 mt-1"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Subscribe
            </h3>

            <p className="text-sm text-gray-400 mb-5">
              Get updates on new projects and services.
            </p>

            <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden">

              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 bg-transparent text-white outline-none text-sm"
              />

              <button className="bg-red-600 px-5 text-white text-sm hover:bg-red-700 transition">
                Join
              </button>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p className="text-white font-semibold">
            © {new Date().getFullYear()} Derrick Digital
          </p>

          <p className="text-gray-400 mt-3 md:mt-0">
            Built with React + Tailwind
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer