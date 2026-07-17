import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function WelcomeCard() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-8 text-white shadow-xl">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left Section */}

        <div>

          <p className="text-blue-100 text-sm flex items-center gap-2">

            <FaCalendarAlt />

            {today}

          </p>

          <h2 className="text-4xl font-bold mt-4">
            Welcome Back, Manvi 👋
          </h2>

          <p className="mt-4 text-blue-100 leading-8 max-w-xl">
            Here's a quick overview of your hostel information.
            Check your room details, fee status, notices and
            complaints from one place.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-3 hover:bg-blue-100 transition">

            View Profile

            <FaArrowRight />

          </button>

        </div>

        {/* Right Section */}

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[260px]">

          <h3 className="text-xl font-semibold mb-5">
            Quick Summary
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span className="text-blue-100">
                Room
              </span>

              <span className="font-semibold">
                A-204
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-blue-100">
                Hostel
              </span>

              <span className="font-semibold">
                Dormix Boys Hostel
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-blue-100">
                Fee Status
              </span>

              <span className="text-green-300 font-semibold">
                Paid
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-blue-100">
                Complaints
              </span>

              <span className="font-semibold">
                1 Active
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;