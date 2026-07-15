import room1 from "../assets/images/img1.jpg";
import room2 from "../assets/images/img2.jpg";
import room3 from "../assets/images/pic2.jpg";

function Rooms() {
  const rooms = [
    {
      image: room1,
      title: "Single Room",
      price: "₹6,500 / month",
      features: "Private Room • WiFi • Attached Bathroom",
    },
    {
      image: room2,
      title: "Double Sharing",
      price: "₹4,500 / month",
      features: "2 Beds • WiFi • Study Table",
    },
    {
      image: room3,
      title: "Triple Sharing",
      price: "₹3,500 / month",
      features: "3 Beds • WiFi • Common Bathroom",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Room Types
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Choose Your Perfect Room
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse different room options designed to suit every student's
            comfort and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {rooms.map((room) => (
            <div
              key={room.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900">
                  {room.title}
                </h3>

                <p className="text-blue-600 font-semibold mt-3">
                  {room.price}
                </p>

                <p className="text-gray-600 mt-4">
                  {room.features}
                </p>

                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Rooms;