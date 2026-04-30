import { useState } from "react"

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faq = [
    {
      q: "How long does a website take?",
      a: "Most business websites take 5–10 days depending on features and client feedback speed."
    },
    {
      q: "Do you provide hosting?",
      a: "Yes, I help with hosting, domain setup, and full deployment support."
    },
    {
      q: "Can I update the website myself?",
      a: "Yes. The websites are built to be scalable and easy to maintain."
    },
    {
      q: "Do you offer support after delivery?",
      a: "Yes, I provide maintenance, updates, and bug fixes when needed."
    }
  ]

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="min-h-screen bg-[#0b0f19] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">

          {faq.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl bg-white/5 overflow-hidden"
            >

              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-white/10 transition"
              >
                <span className="font-semibold text-red-400">
                  {item.q}
                </span>

                <span className="text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-300">
                  {item.a}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Faq