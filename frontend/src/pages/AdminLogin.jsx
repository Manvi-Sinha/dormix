import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";
import api from "../api/axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { data } = await api.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", data.token);

      if (remember) {
        localStorage.setItem("rememberAdmin", "true");
      }

      navigate("/admin-dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5 py-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Panel */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 text-white p-10">

          <div className="w-16 h-16 rounded-2xl bg-white text-blue-700 flex items-center justify-center text-3xl mb-6">
            <FaUserShield />
          </div>

          <h1 className="text-4xl font-bold">
            Admin Portal
          </h1>

          <p className="mt-4 text-blue-100 text-lg leading-8">
            Secure access to manage your hostel and monitor all operations through Dormix.
          </p>

          <div className="mt-10 space-y-4">
            <div>📊 Dashboard & Analytics</div>
            <div>🛏 Manage Rooms & Occupancy</div>
            <div>👨‍🎓 Manage Students</div>
            <div>💰 Fee Management</div>
            <div>📢 Notices & Complaints</div>
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
            Admin Login
          </h2>

          <p className="text-gray-500 mt-2">
            Sign in to manage your Dormix platform.
          </p>

          {error && (
            <div className="mt-6 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

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
                  placeholder="Enter admin email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  required
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
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Options */}

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
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
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="text-center mt-8 text-gray-500 text-sm">
            Authorized administrators only.
          </p>

        </div>

      </div>
    </div>
  );
}

export default AdminLogin;