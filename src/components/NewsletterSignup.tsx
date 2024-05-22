import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
      className="bg-gray-100 py-10 px-4 md:px-10 relative bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10  hero-content">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-center text-white">
          Stay updated with the latest travel packages and exclusive deals.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Subscribe
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-green-500">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
