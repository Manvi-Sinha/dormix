import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-3xl font-bold">
              Dormix
            </h2>

            <p className="text-slate-400 mt-3">
              Smart Hostel & PG Management Platform
            </p>
          </div>

          <div className="flex gap-6 text-2xl mt-8 md:mt-0">

            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />

            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />

            <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" />

          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <p className="text-center text-slate-400">
          © 2026 Dormix. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;