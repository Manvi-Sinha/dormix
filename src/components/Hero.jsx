import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-8 pt-4 pb-12 grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

        {/* Left Content */}
        <div>

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
            Smart Hostel & PG Management Platform
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight text-slate-900">
            Find Your Perfect
            <br />
            Hostel & PG Stay
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-8">
            Discover safe, affordable and comfortable accommodation while
            hostel owners manage everything from one smart platform.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg">
              Explore Rooms
            </button>

            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
              Contact Us
            </button>

          </div>

          <div className="mt-12 flex gap-12">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-500">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">80+</h2>
              <p className="text-gray-500">Rooms</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
              <p className="text-gray-500">Support</p>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="Dormix Hostel"
            className="w-full max-w-[600px] h-[500px] object-cover rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;