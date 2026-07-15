function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md">
            D
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Dormix
          </h1>

        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10 text-slate-700 font-medium">

            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Home
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              About
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Rooms
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Features
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition duration-300">
              Contact
            </li>

          </ul>
        </nav>

        {/* Login Buttons */}
        <div className="flex items-center gap-4">

          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300">
            Student Login
          </button>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md">
            Admin Login
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;