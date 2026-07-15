function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN */}
        <div>

          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            Smart Hostel/PG Management Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Modern Hostel & PG
            <br />
            Management, Simplified.
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            Manage bookings, students, rooms, fees, complaints,
            visitor records and documents from one powerful platform.
          </p>

          <div className="mt-8 flex gap-4">

  <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-medium">
    Get Started
  </button>

  <button className="border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition px-8 py-3 rounded-full font-medium">
    Explore Features
  </button>

</div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

  <h3 className="text-2xl font-semibold">
    Dormix Dashboard
  </h3>

  <p className="text-gray-400 mt-2">
    Live Overview
  </p>

  <div className="mt-8 space-y-4">

    <div className="bg-slate-800 rounded-xl p-4">
      👥 Students : 248
    </div>

    <div className="bg-slate-800 rounded-xl p-4">
      🛏️ Rooms Occupied : 92%
    </div>

    <div className="bg-slate-800 rounded-xl p-4">
      📝 Pending Complaints : 7
    </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default Hero;