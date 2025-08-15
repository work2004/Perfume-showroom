import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Perfume data
const perfumes = [
    {
        id: 1,
        name: "Ocean Breeze",
        brand: "AquaScents",
        volume: "50ml",
        price: "₹2500",
        rating: 4.5,
        description:
            "A fresh, invigorating scent with hints of sea salt and citrus, perfect for daytime wear and summer vibes.",
        images: [
            "https://rukminim2.flixcart.com/image/704/844/xif0q/perfume/5/1/t/100-ocean-breeze-perfume-fresh-and-exhilarating-scent-long-original-imagz3y44zaxtntm.jpeg?q=90&crop=false",
            "https://labelleperfumes.com/cdn/shop/files/ocean-breeze-milestone_1024x.webp?v=1720725925",
            "https://i.ebayimg.com/images/g/VgAAAOSw5GhmYf63/s-l400.jpg",
        ],
    },
    {
        id: 2,
        name: "Mystic Oud",
        brand: "OudElixir",
        volume: "100ml",
        price: "₹3200",
        rating: 4.8,
        description:
            "An exotic, deep fragrance with rich oud and smoky undertones, ideal for evening events or special occasions.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
    {
        id: 3,
        name: "Rose Elegance",
        brand: "FloraFragrance",
        volume: "75ml",
        price: "₹1800",
        rating: 4.3,
        description:
            "A romantic floral scent with delicate rose notes, perfect for casual and evening wear.",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbwfGUMetN1dgs9EaiPjbUdWIqn6dDwaNsw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7R_IDLOIVI10p1gf6QwhCn0C9OWYF-jMjw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjK0jrrry9hoMm7c1-e_jOz4OwtVCKk8Nv-w&s",
        ],
    },
    {
        id: 4,
        name: "Citrus Delight",
        brand: "FreshAura",
        volume: "60ml",
        price: "₹2000",
        rating: 4.6,
        description:
            "Zesty and refreshing citrus fragrance that energizes and uplifts your mood throughout the day.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
    {
        id: 5,
        name: "Vanilla Charm",
        brand: "SweetScent",
        volume: "50ml",
        price: "₹1900",
        rating: 4.2,
        description:
            "A warm and comforting vanilla fragrance with a hint of caramel, ideal for cozy evenings.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
    {
        id: 6,
        name: "Spice Mystique",
        brand: "ExoticEssence",
        volume: "100ml",
        price: "₹3500",
        rating: 4.7,
        description:
            "A bold, spicy fragrance with hints of cinnamon and clove, perfect for winter nights and parties.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
    {
        id: 7,
        name: "Lavender Dreams",
        brand: "CalmAura",
        volume: "75ml",
        price: "₹2200",
        rating: 4.4,
        description:
            "Relaxing lavender scent with floral undertones, ideal for a peaceful and soothing experience.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
    {
        id: 8,
        name: "Amber Night",
        brand: "GoldenScent",
        volume: "100ml",
        price: "₹3300",
        rating: 4.6,
        description:
            "A mysterious amber fragrance with warm and sensual undertones, perfect for evening occasions.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
    {
        id: 9,
        name: "Jasmine Glow",
        brand: "FloraLuxe",
        volume: "50ml",
        price: "₹2100",
        rating: 4.5,
        description:
            "A soft jasmine scent with floral sweetness, ideal for casual and daytime wear.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
    {
        id: 10,
        name: "Woody Essence",
        brand: "NatureBlend",
        volume: "90ml",
        price: "₹2800",
        rating: 4.7,
        description:
            "Earthy woody fragrance with cedar and sandalwood notes, perfect for a sophisticated and natural scent.",
        images: [
            "https://m.media-amazon.com/images/I/51DEBqq+TsL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFFtUUVGI66iHKoHoDQBUCpNVKnNGAWhneg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUNSirxIOPko5IDYHc04tPZj60rowBG77hw&s",
        ],
    },
];


const Shop = () => {
  return (
    <div className="py-12 px-4 md:px-12 bg-gradient-to-b from-purple-50 to-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-purple-900">
        Our Exclusive Perfumes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {perfumes.map((perfume) => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </div>
  );
};

const PerfumeCard = ({ perfume }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide logic
  useEffect(() => {
    // Desktop: hover, Mobile: always auto-slide
    if (!hovered && !isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % perfume.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered, isMobile, perfume.images.length]);

  // Rating stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center mt-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {halfStar && <span className="text-yellow-400">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
        <span className="ml-2 text-sm text-gray-500">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row cursor-pointer hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && (setHovered(false), setCurrentIndex(0))}
    >
      {/* Image Slider */}
      <div className="w-full md:w-1/2 h-48 md:h-48 relative overflow-hidden flex-shrink-0">
        <motion.div
          animate={{ x: -currentIndex * 100 + "%" }}
          transition={{ type: "tween", duration: 0.8 }}
          className="flex w-full h-full"
        >
          {perfume.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={perfume.name}
              className="w-full flex-shrink-0 h-full object-contain p-2 bg-gray-50 rounded-lg"
            />
          ))}
        </motion.div>
      </div>

      {/* Data */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold truncate">{perfume.name}</h2>
          {renderStars(perfume.rating)}
          <p className="mt-1 text-gray-700 text-sm truncate">
            <strong>Brand:</strong> {perfume.brand}
          </p>
          <p className="mt-1 text-gray-700 text-sm truncate">
            <strong>Volume:</strong> {perfume.volume}
          </p>
          <p className="mt-2 text-gray-600 text-sm line-clamp-3">{perfume.description}</p>
        </div>
        <div>
          <p className="mt-2 text-lg text-purple-800 font-bold">{perfume.price}</p>
          <button
            className="mt-2 bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors duration-300"
            onClick={() => alert(`Added ${perfume.name} to cart!`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
