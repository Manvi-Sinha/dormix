import { useState } from "react";
import {
  FaPaperPlane,
  FaTools,
  FaTint,
  FaBolt,
  FaBroom,
} from "react-icons/fa";

function Complaints() {
  const [complaint, setComplaint] = useState({
    category: "Electrical",
    description: "",
  });

  const complaints = [
    {
      id: 1,
      category: "Electrical",
      date: "18 Jul 2026",
      status: "Pending",
      issue: "Tube light is not working.",
    },
    {
      id: 2,
      category: "Cleaning",
      date: "10 Jul 2026",
      status: "Resolved",
      issue: "Room cleaning required.",
    },
    {
      id: 3,
      category: "Plumbing",
      date: "05 Jul 2026",
      status: "In Progress",
      issue: "Bathroom tap is leaking.",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

        <h1 className="text-2xl font-semibold text-slate-800">
          Complaints
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Raise maintenance requests and track their status.
        </p>

      </div>

      {/* Form + Tips */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Complaint Form */}

        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Raise a Complaint
          </h2>

          <div className="space-y-5">

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>

              <select
                value={complaint.category}
                onChange={(e) =>
                  setComplaint({
                    ...complaint,
                    category: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
              >
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>Furniture</option>
                <option>Cleaning</option>
                <option>Internet</option>
                <option>Other</option>
              </select>

            </div>

            <div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Describe the Issue
              </label>

              <textarea
                rows="6"
                value={complaint.description}
                onChange={(e) =>
                  setComplaint({
                    ...complaint,
                    description: e.target.value,
                  })
                }
                placeholder="Describe your issue..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm resize-none outline-none focus:border-blue-600"
              />

            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition">

              <FaPaperPlane />

              Submit Complaint

            </button>

          </div>

        </div>

        {/* Categories */}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-lg font-semibold text-slate-800 mb-5">
            Categories
          </h2>

          <div className="space-y-4">

            <Category icon={<FaBolt />} text="Electrical" />
            <Category icon={<FaTint />} text="Plumbing" />
            <Category icon={<FaTools />} text="Furniture" />
            <Category icon={<FaBroom />} text="Cleaning" />

          </div>

        </div>

      </div>

      {/* Complaint History */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="border-b border-slate-200 p-6">

          <h2 className="text-lg font-semibold text-slate-800">
            Complaint History
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left px-6 py-4 text-sm font-semibold">
                  Date
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold">
                  Category
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold">
                  Issue
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {complaints.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >

                  <td className="px-6 py-5 text-sm">
                    {item.date}
                  </td>

                  <td className="px-6 py-5 text-sm">
                    {item.category}
                  </td>

                  <td className="px-6 py-5 text-sm">
                    {item.issue}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

function Category({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">

      <div className="w-10 h-10 rounded-xl bg-[#C8D9E6] flex items-center justify-center text-blue-700">
        {icon}
      </div>

      <span className="text-sm font-medium text-slate-700">
        {text}
      </span>

    </div>
  );
}

export default Complaints;