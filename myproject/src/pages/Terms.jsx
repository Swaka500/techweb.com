const Terms = () => {
  return (
    <section className="min-h-screen bg-[#0b0f19] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Terms & Conditions
        </h1>

        {/* Content Box */}
        <div className="space-y-8 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">

          <p className="text-gray-300">
            By using this website and services, you agree to the following terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Project Timeline
            </h2>
            <p className="text-gray-300">
              Project delivery timelines depend on scope and client feedback speed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Payments
            </h2>
            <p className="text-gray-300">
              A deposit is required before work begins. Final payment is due before deployment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Revisions
            </h2>
            <p className="text-gray-300">
              Reasonable revisions are included. Major changes may affect cost.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Ownership
            </h2>
            <p className="text-gray-300">
              After full payment, the client owns the final website.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Terms