import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaGraduationCap,
  FaBuilding,
  FaBed,
  FaUserShield,
  FaEdit,
} from "react-icons/fa";

function Profile() {
  const personalInfo = [
    { icon: <FaUser />, label: "Full Name", value: "Aarav Sharma" },
    { icon: <FaEnvelope />, label: "Email", value: "aarav.sharma@example.com" },
    { icon: <FaPhoneAlt />, label: "Mobile", value: "+91 98765 43210" },
    { icon: <FaGraduationCap />, label: "Course", value: "B.Tech - Computer Science" },
  ];

  const hostelInfo = [
    { icon: <FaBuilding />, label: "Hostel", value: "Dormix Boys Hostel" },
    { icon: <FaBed />, label: "Room", value: "A-204" },
    { icon: <FaUserShield />, label: "Warden", value: "Mr. Rajesh Kumar" },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>

            <h1 className="text-2xl font-semibold text-slate-800">
              My Profile
            </h1>

            <p className="text-sm text-slate-500 mt-2">
              View your personal and hostel information.
            </p>

          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition">

            <FaEdit />

            Edit Profile

          </button>

        </div>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

        <div className="flex flex-col items-center text-center">

          <div className="w-28 h-28 rounded-full bg-[#C8D9E6] flex items-center justify-center text-blue-700 text-5xl">

            <FaUser />

          </div>

          <h2 className="mt-5 text-2xl font-semibold text-slate-800">
            Aarav Sharma
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Student ID: STU2026001
          </p>

        </div>

      </div>

      {/* Information */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Personal Information */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Personal Information
          </h2>

          <div className="space-y-4">

            {personalInfo.map((item) => (

              <InfoRow
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />

            ))}

          </div>

        </div>

        {/* Hostel Information */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Hostel Information
          </h2>

          <div className="space-y-4">

            {hostelInfo.map((item) => (

              <InfoRow
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />

            ))}

          </div>

        </div>

      </div>

      {/* Emergency Contact */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h2 className="text-lg font-semibold text-slate-800 mb-5">
          Emergency Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InfoRow
            icon={<FaUser />}
            label="Guardian"
            value="Ramesh Sharma"
          />

          <InfoRow
            icon={<FaPhoneAlt />}
            label="Phone"
            value="+91 91234 56789"
          />

        </div>

      </div>

    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">

      <div className="w-11 h-11 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">

        {icon}

      </div>

      <div>

        <p className="text-xs text-slate-500">
          {label}
        </p>

        <h3 className="text-base font-semibold text-slate-800">
          {value}
        </h3>

      </div>

    </div>
  );
}

export default Profile;