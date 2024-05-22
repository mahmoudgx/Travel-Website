import Slider from "react-slick";
import ArtCard from "../components/ArtCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const images = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Europe",
    description: "London",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Europe",
    description: "Paris",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "North America",
    description: "New York",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Africa",
    description: "Egypt",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Asia",
    description: "Malaysia",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1671211307997-f4f552b0601c?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "South America",
    description: "Rio de Janeiro",
  },
];

const Destinations = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="p-4 md:p-10" id="Destinations">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Destinations
        </h2>
        <motion.button
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          View All Destinations
        </motion.button>
      </motion.div>
      <div className="pt-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <ArtCard
              key={index}
              imageUrl={image.imageUrl}
              title={image.title}
              description={image.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Destinations;
