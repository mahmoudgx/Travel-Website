import { useState } from "react";

const questions = [
  {
    question: "What travel documents do I need?",
    answer:
      "You typically need a passport for international trips, and some countries require a visa. Always check the entry requirements for your destination before your trip.",
  },
  {
    question: "How early should I arrive at the airport?",
    answer:
      "It is recommended to arrive at least 2 hours before domestic flights and 3 hours before international flights.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Our refund policy includes full refunds up to two weeks before the trip, partial refunds up to one week before the trip, and no refunds within a week of the trip.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer group discounts for groups of 10 or more. Please contact us for more details.",
  },
  {
    question: "Are travel vaccines necessary?",
    answer:
      "Depending on your destination, some vaccines may be required or recommended. Check with your healthcare provider or a travel clinic well in advance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    // Specify type for index
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="py-10 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4">
            <h3
              onClick={() => toggleIndex(index)}
              className="text-lg font-semibold cursor-pointer flex justify-between items-center"
            >
              {item.question}
              <span className="text-lg">
                {activeIndex === index ? "-" : "+"}
              </span>
            </h3>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
