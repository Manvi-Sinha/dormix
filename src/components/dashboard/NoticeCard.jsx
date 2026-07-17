import {
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";

function NoticeCard() {
  const notices = [
    {
      title: "Hostel Maintenance",
      date: "20 Aug 2025",
      type: "Maintenance",
    },
    {
      title: "Semester Fee Reminder",
      date: "18 Aug 2025",
      type: "Fees",
    },
    {
      title: "Independence Day Celebration",
      date: "15 Aug 2025",
      type: "Event",
    },
  ];

  const getBadgeColor = (type) => {
    switch (type) {
      case "Maintenance":
        return "bg-orange-100 text-orange-700";
      case "Fees":
        return "bg-red-100 text-red-700";
      case "Event":
        return "bg-green-100 text-green-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-semibold text-slate-800">
            Latest Notices
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Stay updated with hostel announcements
          </p>

        </div>

        <div className="w-12 h-12 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
          <FaBullhorn className="text-lg" />
        </div>

      </div>

      {/* Notices */}

      <div className="space-y-4">

        {notices.map((notice, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-white hover:shadow-sm transition"
          >
            <div>

              <h3 className="text-sm font-semibold text-slate-800">
                {notice.title}
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                {notice.date}
              </p>

            </div>

            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${getBadgeColor(
                notice.type
              )}`}
            >
              {notice.type}
            </span>
          </div>
        ))}

      </div>

      {/* Footer */}

      <button className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition">
        View All Notices
        <FaArrowRight className="text-xs" />
      </button>

    </div>
  );
}

export default NoticeCard;