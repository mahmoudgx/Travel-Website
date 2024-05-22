const packages = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683120751032-41fdd5226ab6?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Romantic Paris",
    description: "Experience the romance of Paris with our special package.",
    price: "$1200",
    isPopular: false,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Adventures in Bali",
    description: "Discover the beauty and excitement of Bali.",
    price: "$1500",
    isPopular: true,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Safari in Kenya",
    description: "Join our safari tour in Kenya and see the Big Five.",
    price: "$1800",
    isPopular: false,
  },
];

const TravelPackages = () => {
  return (
    <div id="TravelPackages" className="py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Travel Packages
        </h2>
        <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full">
          View All Packages
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-lg overflow-hidden shadow-lg ${
              pkg.isPopular ? "border-4 border-blue-400" : ""
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 rounded-bl-lg font-bold">
                Most Popular
              </div>
            )}
            <img
              src={pkg.imageUrl}
              alt={pkg.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{pkg.title}</h3>
              <p className="mt-2 text-gray-600">{pkg.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">{pkg.price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPackages;
