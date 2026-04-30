import { useState } from "react"

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  })

  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all required fields")
      setTimeout(() => setStatus(""), 3000)
      return
    }

    setLoading(true)
    setStatus("Sending...")

    setTimeout(() => {
      setLoading(false)
      setStatus("Booking sent successfully 🚀")

      setForm({
        name: "",
        email: "",
        service: "",
        message: ""
      })

      // auto remove message
      setTimeout(() => {
        setStatus("")
      }, 3000)

    }, 1200)
  }

  return (
    <section
      id="booking"
      className="min-h-screen bg-[#0b0f19] text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Book a Project
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />

          {/* SERVICE */}
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg text-white outline-none"
          >
            <option value="">Select Service</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Business Analysis</option>
            <option>E-Commerce</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Project Details"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Request"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p className="text-center text-sm text-gray-400">
              {status}
            </p>
          )}

        </form>
      </div>
    </section>
  )
}

export default Booking