import { FaCheckCircle } from "react-icons/fa";
import aboutImage from "../assets/images/pic1.jpg";

function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}

        <div>
          <img
            src={aboutImage}
            alt="About Dormix"
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* Right Content */}

        <div>

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About Dormix
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Simplifying Hostel &
            <br />
            PG Management
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Dormix is a modern hostel and PG management platform designed to
            simplify daily operations for hostel owners while giving students
            a smooth and hassle-free living experience. Manage bookings,
            payments, complaints and visitor records from one place.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Online Room Booking</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Digital Fee Tracking</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Complaint Management</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Visitor Management</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600 text-xl" />
              <span>Digital Documents</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;