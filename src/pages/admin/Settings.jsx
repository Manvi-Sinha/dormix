import { useState } from "react";
import {
  FaSave,
  FaBuilding,
  FaMoneyBillWave,
  FaBell,
  FaShieldAlt,
} from "react-icons/fa";

function Settings() {
  const [settings, setSettings] = useState({
    hostelName: "Dormix Hostel",
    address: "123 Main Road, Bengaluru",
    monthlyFee: "8500",
    lateFee: "500",
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="text-slate-500 mt-1">
          Configure your hostel management system.
        </p>
      </div>

      {/* Hostel Information */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaBuilding />
          </div>

          <h2 className="text-lg font-semibold">
            Hostel Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Hostel Name
            </label>

            <input
              type="text"
              name="hostelName"
              value={settings.hostelName}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
            />
          </div>
        </div>
      </div>

      {/* Fee Settings */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaMoneyBillWave />
          </div>

          <h2 className="text-lg font-semibold">
            Fee Settings
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Monthly Fee (₹)
            </label>

            <input
              type="number"
              name="monthlyFee"
              value={settings.monthlyFee}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Late Fee (₹)
            </label>

            <input
              type="number"
              name="lateFee"
              value={settings.lateFee}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6]"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaBell />
          </div>

          <h2 className="text-lg font-semibold">
            Notifications
          </h2>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between">
            <span>Email Notifications</span>

            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </label>

          <label className="flex items-center justify-between">
            <span>SMS Notifications</span>

            <input
              type="checkbox"
              name="smsNotifications"
              checked={settings.smsNotifications}
              onChange={handleChange}
              className="w-5 h-5"
            />
          </label>
        </div>
      </div>

      {/* Security */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
            <FaShieldAlt />
          </div>

          <h2 className="text-lg font-semibold">
            Security
          </h2>
        </div>

        <button className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition font-medium">
          Change Admin Password
        </button>
      </div>

      {/* Save */}

      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-[#C8D9E6] hover:bg-blue-100 transition px-6 py-3 rounded-xl font-medium">
          <FaSave />
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;