function Navbar() {
  return (
    <nav className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-blue-500">
          Dormix
        </h1>

        <ul className="flex gap-8">
          <li>Home</li>
          <li>Features</li>
          <li>Rooms</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-4">
          <button className="border border-gray-600 px-5 py-2 rounded-lg">
            Student Login
          </button>

          <button className="bg-blue-600 px-5 py-2 rounded-lg">
            Admin Login
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;