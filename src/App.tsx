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
      <Destinations />
      <TravelPackages />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
