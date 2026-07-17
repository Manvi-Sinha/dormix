import {
  FaUsers,
  FaBed,
  FaSmile,
  FaHeadset,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaUsers size={35} />,
      number: "500+",
      title: "Students",
    },
    {
      icon: <FaBed size={35} />,
      number: "80+",
      title: "Rooms",
    },
    {
      icon: <FaSmile size={35} />,
      number: "99%",
      title: "Satisfied Residents",
    },
    {
      icon: <FaHeadset size={35} />,
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Our Impact
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Trusted by students and hostel owners across the country.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-3xl p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-center text-blue-600">
                {stat.icon}
              </div>

              <h3 className="mt-6 text-5xl font-bold text-slate-900">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-500 font-medium">
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