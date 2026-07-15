function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Students Managed",
    },
    {
      number: "150+",
      title: "Hostels & PGs",
    },
    {
      number: "98%",
      title: "Occupancy Rate",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-blue-500 transition"
            >
              <h2 className="text-5xl font-bold text-blue-500">
                {stat.number}
              </h2>

              <p className="mt-4 text-gray-400">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;