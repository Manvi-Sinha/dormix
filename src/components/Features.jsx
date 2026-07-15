function Features() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Everything You Need
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Manage every aspect of your hostel/PG from one platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">🛏️ Room Booking</h3>
            <p className="text-gray-400 mt-3">
              Book and manage rooms effortlessly.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">💰 Fee Tracking</h3>
            <p className="text-gray-400 mt-3">
              Track payments and due dates.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">📝 Complaints</h3>
            <p className="text-gray-400 mt-3">
              Resolve student complaints quickly.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">🚶 Visitor Logs</h3>
            <p className="text-gray-400 mt-3">
              Secure visitor check-ins and history.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;