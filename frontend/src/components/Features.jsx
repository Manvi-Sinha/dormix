import {
  FaBed,
  FaMoneyBillWave,
  FaClipboardList,
  FaFileAlt,
  FaUserFriends,
  FaBell,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBed />,
      title: "Room Booking",
      desc: "Students can easily browse and reserve available rooms online.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Fee Tracking",
      desc: "Track fee payments, due dates and payment history digitally.",
    },
    {
      icon: <FaClipboardList />,
      title: "Complaint Management",
      desc: "Raise and resolve complaints without paperwork.",
    },
    {
      icon: <FaFileAlt />,
      title: "Digital Documents",
      desc: "Store important hostel documents securely in one place.",
    },
    {
      icon: <FaUserFriends />,
      title: "Visitor Management",
      desc: "Maintain visitor records with quick check-in and check-out.",
    },
    {
      icon: <FaBell />,
      title: "Notifications",
      desc: "Receive instant announcements and important updates.",
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Dormix provides every tool needed to simplify hostel and PG
            management for students and administrators.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;