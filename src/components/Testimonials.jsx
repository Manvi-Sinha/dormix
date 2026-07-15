function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Hostel Administrator",
      review:
        "Dormix has simplified room allocation and fee management. It's incredibly easy to use.",
    },
    {
      name: "Rahul Verma",
      role: "PG Owner",
      review:
        "Managing complaints and student records has never been easier. Highly recommended.",
    },
    {
      name: "Ananya Singh",
      role: "Hostel Manager",
      review:
        "The dashboard gives us everything we need in one place. It has saved us hours every week.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            What Our Users Say
          </h2>

          <p className="text-gray-400 mt-4">
            Trusted by hostel and PG owners.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
            >
              <p className="text-gray-300 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-blue-400 text-sm">
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