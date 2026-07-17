import {
  FaBullhorn,
  FaCalendarAlt,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

function Notices() {
  const notices = [
    {
      id: 1,
      title: "Hostel Fee Payment Reminder",
      date: "20 Jul 2026",
      type: "Important",
      description:
        "Students are requested to pay the remaining hostel fee before 30 July 2026 to avoid late payment charges.",
    },
    {
      id: 2,
      title: "Water Supply Maintenance",
      date: "18 Jul 2026",
      type: "Maintenance",
      description:
        "Water supply will remain unavailable from 10:00 AM to 1:00 PM due to scheduled maintenance.",
    },
    {
      id: 3,
      title: "Independence Day Celebration",
      date: "15 Jul 2026",
      type: "Event",
      description:
        "All hostel residents are invited to participate in the Independence Day celebration on 15 August.",
    },
    {
      id: 4,
      title: "Library Timing Updated",
      date: "12 Jul 2026",
      type: "Information",
      description:
        "The hostel study room and library will now remain open until 11:00 PM every day.",
    },
  ];

  const getBadge = (type) => {
    switch (type) {
      case "Important":
        return "bg-red-100 text-red-700";
      case "Maintenance":
        return "bg-yellow-100 text-yellow-700";
      case "Event":
        return "bg-green-100 text-green-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "Important":
        return <FaExclamationCircle />;
      case "Maintenance":
        return <FaBullhorn />;
      case "Event":
        return <FaBullhorn />;
      default:
        return <FaInfoCircle />;
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h1 className="text-2xl font-semibold text-slate-800">
          Hostel Notices
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Stay updated with announcements, maintenance schedules and important hostel information.
        </p>

      </div>

      {/* Notice Cards */}

      <div className="space-y-5">

        {notices.map((notice) => (

          <div
            key={notice.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition"
          >

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] text-blue-700 flex items-center justify-center text-lg">

                  {getIcon(notice.type)}

                </div>

                <div>

                  <h2 className="text-lg font-semibold text-slate-800">
                    {notice.title}
                  </h2>

                  <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">

                    <FaCalendarAlt />

                    {notice.date}

                  </div>

                </div>

              </div>

              <span
                className={`self-start px-3 py-1 rounded-full text-xs font-semibold ${getBadge(
                  notice.type
                )}`}
              >
                {notice.type}
              </span>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              {notice.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Notices;