import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

function WelcomeCard() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col lg:flex-row justify-between gap-6">

      {/* Left Section */}

      <div className="flex-1">

        <div className="inline-flex items-center gap-2 bg-[#C8D9E6] text-slate-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          <FaCalendarAlt className="text-xs" />
          {today}
        </div>

        <h2 className="text-2xl font-semibold text-slate-800">
          Welcome back, Manvi 👋
        </h2>

        <p className="text-sm text-slate-500 mt-3 leading-6 max-w-xl">
          Here's a quick overview of your hostel information. Stay updated with
          your room details, fee status, notices, and complaints—all in one
          place.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-xl transition">
          View Profile
          <FaArrowRight className="text-xs" />
        </button>

      </div>

      {/* Right Section */}

      <div className="grid grid-cols-2 gap-4 lg:w-80">

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <p className="text-xs text-slate-500">Room</p>
          <h3 className="text-xl font-semibold text-slate-800 mt-1">
            A-204
          </h3>
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <p className="text-xs text-slate-500">Floor</p>
          <h3 className="text-xl font-semibold text-slate-800 mt-1">
            2nd
          </h3>
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <p className="text-xs text-slate-500">Pending Fee</p>
          <h3 className="text-xl font-semibold text-red-500 mt-1">
            ₹8,500
          </h3>
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <p className="text-xs text-slate-500">Complaints</p>
          <h3 className="text-xl font-semibold text-slate-800 mt-1">
            1 Active
          </h3>
        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;