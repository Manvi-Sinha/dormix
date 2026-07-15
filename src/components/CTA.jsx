function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Modernize Your Hostel/PG?
        </h2>

        <p className="text-blue-100 mt-6 text-lg">
          Join Dormix and simplify room bookings, fee tracking,
          complaints, visitors and more.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>

          <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;