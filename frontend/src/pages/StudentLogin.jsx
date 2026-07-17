import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      remember,
    });

    // Backend API will be connected here later
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5 py-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Panel */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-blue-500 text-white p-10">

          <h1 className="text-4xl font-bold">
            Dormix
          </h1>

          <p className="mt-4 text-blue-100 text-lg leading-8">
            Smart Hostel & PG Management Platform
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              ✅ Student Dashboard
            </div>

            <div className="flex items-center gap-3">
              ✅ Digital Fee Management
            </div>

            <div className="flex items-center gap-3">
              ✅ Complaint Tracking
            </div>

            <div className="flex items-center gap-3">
              ✅ Notices & Updates
            </div>

          </div>

          <Link
            to="/"
            className="mt-10 flex items-center gap-2 w-fit bg-white text-blue-700 px-5 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

        </div>

        {/* Right Panel */}

        <div className="p-8 lg:p-10">

          <h2 className="text-3xl font-bold text-slate-800">
            Student Login
          </h2>

          <p className="text-gray-500 mt-2">
            Login to access your Dormix dashboard.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >

            {/* Email */}

            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-xl pl-12 pr-12 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* Options */}

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() =>
                    setRemember(!remember)
                  }
                />

                Remember Me

              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-8 text-gray-500 text-sm">
            Need help? Contact your hostel administrator.
          </p>

        </div>

      </div>
    </div>
  );
}

export default StudentLogin;