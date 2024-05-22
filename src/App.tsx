import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Destinations from "./components/Destinations";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import TravelPackages from "./components/TravelPackages";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <Destinations />
      <TravelPackages />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
