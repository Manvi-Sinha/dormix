import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Contact Us
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            We'd Love to Hear From You
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Get in touch with us and we'll help you find the
            perfect accommodation.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-600">support@dormix.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold text-xl">Address</h3>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <form className="bg-slate-50 rounded-3xl p-8 shadow-md">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border mb-5 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border mb-5 outline-none focus:border-blue-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border mb-5 outline-none focus:border-blue-600"
            ></textarea>

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;