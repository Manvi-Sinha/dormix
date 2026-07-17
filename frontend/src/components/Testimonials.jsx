import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Hostel Owner",
      review:
        "Dormix has completely transformed the way we manage students, rooms and fee collection. Everything is now organized in one place.",
    },
    {
      name: "Priya Singh",
      role: "Student",
      review:
        "Booking my hostel room was quick and simple. I can also track payments and receive notifications without any hassle.",
    },
    {
      name: "Aman Gupta",
      role: "PG Owner",
      review:
        "The dashboard is clean, easy to use and saves us hours of manual work every week.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What Our Users Say
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by students and hostel owners across the country.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >

              <div className="flex gap-1 text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-blue-600">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;