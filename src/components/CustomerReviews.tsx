const reviews = [
  {
    name: "John Doe",
    review:
      "This travel agency provided an amazing experience! Highly recommend their services.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    name: "Jane Smith",
    review:
      "Great customer service and wonderful travel packages. Will book again!",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    name: "Emily Johnson",
    review:
      "Had an unforgettable trip thanks to this travel agency. Excellent job!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

const CustomerReviews = () => {
  return (
    <div id="Reviews" className="py-10 px-4 md:px-10 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Customer Reviews
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.imageUrl}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <div className="flex">
                  {Array(review.rating)
                    .fill(null)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927a.75.75 0 011.402 0l1.715 3.473 3.836.558a.75.75 0 01.416 1.279l-2.776 2.707.655 3.825a.75.75 0 01-1.088.791L10 13.348l-3.433 1.804a.75.75 0 01-1.088-.791l.655-3.825-2.776-2.707a.75.75 0 01.416-1.279l3.836-.558 1.715-3.473z" />
                      </svg>
                    ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
