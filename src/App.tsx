import CustomerReviews from "./sections/CustomerReviews";
import Destinations from "./sections/Destinations";
import Faq from "./sections/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import NewsletterSignup from "./components/NewsletterSignup";
import TravelPackages from "./sections/TravelPackages";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Destinations />
      <TravelPackages />
      <CustomerReviews />
      <Faq />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default App;
