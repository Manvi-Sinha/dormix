import {
  FaShieldAlt,
  FaClock,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
      title: "Secure Student Records",
      desc: "Store student information securely with easy access.",
    },
    {
      icon: <FaClock className="text-blue-500 text-2xl" />,
      title: "Save Time",
      desc: "Automate repetitive hostel management tasks.",
    },
    {
      icon: <FaMobileAlt className="text-blue-500 text-2xl" />,
      title: "Responsive Design",
      desc: "Access Dormix from desktop, tablet or mobile.",
    },
    {
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      title: "Real-Time Insights",
      desc: "Monitor occupancy, complaints and bookings instantly.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose Dormix?
          </h2>

          <p className="text-gray-400 mt-4">
            Built to simplify every aspect of Hostel & PG management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition"
            >
              {item.icon}

              <h3 className="text-2xl font-semibold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;