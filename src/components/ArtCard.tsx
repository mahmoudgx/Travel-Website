import { motion } from "framer-motion";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const ArtCard = ({ imageUrl, title, description }: Props) => {
  return (
    <motion.div
      className="relative w-[320px] h-[450px] rounded-lg overflow-hidden shadow-lg m-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={imageUrl}
        alt="Art Display"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 bg-white text-md px-2 py-1 rounded-full shadow-md">
        {title}
      </div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
        <p className="text-2xl font-semibold">{description}</p>
      </div>
      <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.752 11.168l-7.272-4.424A1 1 0 006 7.618v8.764a1 1 0 001.48.874l7.272-4.424a1 1 0 000-1.748z"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default ArtCard;
