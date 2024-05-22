import CustomerReviews from "./components/CustomerReviews";
import Destinations from "./components/Destinations";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import NewsletterSignup from "./components/NewsletterSignup";
import TravelPackages from "./components/TravelPackages";

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
