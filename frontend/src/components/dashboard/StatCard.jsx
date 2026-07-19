function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 font-medium">
            {title}
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-2">
            {value}
          </h2>
        </div>

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: "#C8D9E6",
            color: color || "#2563EB",
          }}
        >
          <Icon size={28} />
        </div>
      </div>
    </div>
  );
}

export default StatCard;