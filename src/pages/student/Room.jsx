import {
  FaBed,
  FaBuilding,
  FaDoorOpen,
  FaLayerGroup,
  FaUserTie,
  FaPhoneAlt,
  FaWifi,
  FaFan,
  FaBath,
  FaBook,
  FaLock,
  FaShieldAlt,
  FaTools,
  FaPhone,
  FaFirstAid,
  FaFireExtinguisher,
} from "react-icons/fa";

function Room() {
  const facilities = [
    "High-Speed Wi-Fi",
    "Study Table",
    "Cupboard",
    "Ceiling Fan",
    "Mattress",
    "Attached Bathroom",
  ];

  const hostelRules = [
    "Maintain cleanliness inside the room.",
    "Visitors are allowed only during permitted hours.",
    "Smoking and alcohol are strictly prohibited.",
    "Keep noise levels low after 10:00 PM.",
  ];

  const emergencyContacts = [
    {
      title: "Security",
      value: "+91 98765 11111",
      icon: <FaShieldAlt />,
    },
    {
      title: "Reception",
      value: "+91 98765 22222",
      icon: <FaPhone />,
    },
    {
      title: "Medical",
      value: "+91 98765 33333",
      icon: <FaFirstAid />,
    },
    {
      title: "Fire Safety",
      value: "101",
      icon: <FaFireExtinguisher />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h1 className="text-2xl font-semibold text-slate-800">
          Room Details
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          View your hostel room information, facilities, hostel rules, and
          emergency contacts.
        </p>

      </div>

      {/* Room + Warden */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Room Information */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Room Information
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <InfoCard icon={<FaDoorOpen />} label="Room Number" value="A-204" />
            <InfoCard icon={<FaBed />} label="Bed Number" value="B-2" />
            <InfoCard icon={<FaBuilding />} label="Block" value="Block A" />
            <InfoCard icon={<FaLayerGroup />} label="Floor" value="Second Floor" />

          </div>

        </div>

        {/* Warden */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Warden Information
          </h2>

          <div className="space-y-4">

            <InfoRow
              icon={<FaUserTie />}
              title="Warden"
              value="Mr. Rajesh Kumar"
            />

            <InfoRow
              icon={<FaPhoneAlt />}
              title="Contact"
              value="+91 98765 43210"
            />

            <InfoRow
              icon={<FaBook />}
              title="Office Hours"
              value="09:00 AM – 05:00 PM"
            />

          </div>

        </div>

      </div>

      {/* Facilities + Rules */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Facilities */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Room Facilities
          </h2>

          <div className="grid grid-cols-2 gap-4">

            {facilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">

                  {item.includes("Wi") && <FaWifi />}
                  {item.includes("Study") && <FaBook />}
                  {item.includes("Cupboard") && <FaLock />}
                  {item.includes("Fan") && <FaFan />}
                  {item.includes("Mattress") && <FaBed />}
                  {item.includes("Bathroom") && <FaBath />}

                </div>

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* Hostel Rules */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Hostel Rules
          </h2>

          <div className="space-y-4">

            {hostelRules.map((rule) => (
              <div
                key={rule}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>

                <p className="text-sm text-slate-600 leading-6">
                  {rule}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Emergency Contacts */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h2 className="text-lg font-semibold text-slate-800 mb-5">
          Emergency Contacts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          {emergencyContacts.map((item) => (
            <div
              key={item.title}
              className="border border-slate-200 rounded-xl bg-slate-50 p-5 text-center"
            >

              <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] text-blue-700 flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>

              <h3 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Maintenance */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div>

          <h2 className="text-lg font-semibold text-slate-800">
            Need Room Maintenance?
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Report electrical, plumbing, furniture or cleanliness issues.
          </p>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2">

          <FaTools />

          Request Maintenance

        </button>

      </div>

    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">

      <div className="w-10 h-10 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700 mb-3">
        {icon}
      </div>

      <p className="text-xs text-slate-500">
        {label}
      </p>

      <h3 className="text-lg font-semibold text-slate-800 mt-1">
        {value}
      </h3>

    </div>
  );
}

function InfoRow({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 border border-slate-200 rounded-xl bg-slate-50 p-4">

      <div className="w-10 h-10 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
        {icon}
      </div>

      <div>

        <p className="text-xs text-slate-500">
          {title}
        </p>

        <h3 className="text-base font-semibold text-slate-800">
          {value}
        </h3>

      </div>

    </div>
  );
}

export default Room;