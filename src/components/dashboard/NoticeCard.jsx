import {
  FaBullhorn,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

function NoticeCard() {
  const notices = [
    {
      title: "Water Supply Maintenance",
      date: "15 July 2026",
      description:
        "Water supply will remain unavailable from 10:00 AM to 1:00 PM due to maintenance work.",
    },
    {
      title: "Mess Menu Updated",
      date: "13 July 2026",
      description:
        "The weekly mess menu has been updated. Please check the notice board for details.",
    },
    {
      title: "Hostel Cultural Event",
      date: "10 July 2026",
      description:
        "Join us for the annual cultural evening on Saturday at 6:00 PM in the hostel auditorium.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">

            <FaBullhorn className="text-orange-600 text-xl" />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              Latest Notices
            </h2>

            <p className="text-sm text-gray-500">
              Stay updated with hostel announcements
            </p>

          </div>

        </div>

        <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">

          View All

          <FaArrowRight />

        </button>

      </div>

      {/* Notices */}

      <div className="space-y-5">

        {notices.map((notice, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 hover:bg-slate-50 transition"
          >

            <div className="flex items-center justify-between flex-wrap gap-2">

              <h3 className="text-lg font-semibold text-slate-800">
                {notice.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-500">

                <FaCalendarAlt />

                {notice.date}

              </div>

            </div>

            <p className="mt-3 text-gray-600 leading-7">
              {notice.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default NoticeCard;