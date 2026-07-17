import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            D
          </div>

          <h1 className="text-5xl font-bold text-slate-900">
            Dormix
          </h1>

        </Link>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-12 text-lg font-medium">

          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#rooms" className="hover:text-blue-600 transition">
            Rooms
          </a>

          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <Link
            to="/student-login"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
          >
            Student Login
          </Link>

          <Link
            to="/admin-login"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Admin Login
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;