import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Buys({ selectedPerfume }) {
    const { state } = useLocation();
    const perfume = selectedPerfume || state;

    // const perfume = selectedPerfume || {
    //     name: "Ocean Breeze",
    //     brand: "AquaScents",
    //     volume: "50ml",
    //     price: 2500,
    //     rating: 4.5,
    //     description:
    //         "A fresh, invigorating scent with hints of sea salt and citrus, perfect for daytime wear and summer vibes.",
    //     images: [
    //         "https://rukminim2.flixcart.com/image/704/844/xif0q/perfume/5/1/t/100-ocean-breeze-perfume-fresh-and-exhilarating-scent-long-original-imagz3y44zaxtntm.jpeg?q=90&crop=false",
    //         "https://labelleperfumes.com/cdn/shop/files/ocean-breeze-milestone_1024x.webp?v=1720725925",
    //     ],
    // };

    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % perfume.images.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [isMobile, perfume.images.length]);

    const totalPrice = perfume.price * quantity;

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % perfume.images.length);
    const prevImage = () =>
        setCurrentIndex(
            (prev) => (prev - 1 + perfume.images.length) % perfume.images.length
        );

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const second_perfume = [
        {
            id: 1,
            name: "Ocean Breeze",
            brand: "AquaScents",
            volume: "50ml",
            price: "2500",
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
            price: "3200",
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
            price: "1800",
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
            price: "2000",
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
            price: "1900",
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
            price: "3500",
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
            price: "2200",
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
            price: "3300",
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
            price: "2100",
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
            price: "2800",
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


    const [search, setSearch] = useState("");
    const filteredProducts = second_perfume.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white relative py-8 px-4 md:px-16">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1610648268832-83e4371f1e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                alt="Perfume Background"
                                className="w-full h-full object-cover opacity-10"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative max-w-5xl mx-auto bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10"
                        >

                            <div className="text-center mb-6 md:mb-10">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-2">
                                    Buy Your Favorite Perfume
                                </h1>
                                <p className="text-gray-700 text-sm md:text-base">
                                    Experience the luxury and freshness of {perfume.name}. Choose
                                    quantity, add to favorites, and complete your purchase.
                                </p>
                            </div>
                            <div
                                className={`flex flex-col ${isMobile ? "gap-6" : "md:flex-row gap-8"
                                    } items-center`}
                            >

                                <div className="w-full md:w-1/2 h-64 md:h-80 relative overflow-hidden rounded-xl flex items-center justify-center bg-gray-50">
                                    <motion.div
                                        animate={{ x: -currentIndex * 100 + "%" }}
                                        transition={{ type: "tween", duration: 0.5 }}
                                        className="flex w-full h-full"
                                    >
                                        {perfume.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={perfume.name}
                                                className="w-full h-full flex-shrink-0 object-contain"
                                            />
                                        ))}
                                    </motion.div>

                                    {!isMobile && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 shadow-md"
                                            >
                                                ‹
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 shadow-md"
                                            >
                                                ›
                                            </button>
                                        </>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-between p-2 md:p-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h1 className="text-2xl md:text-3xl font-extrabold text-purple-900">
                                                {perfume.name}
                                            </h1>
                                            <button
                                                onClick={() => setFavorite(!favorite)}
                                                className="text-2xl text-red-500 hover:scale-110 transition-transform"
                                            >
                                                {favorite ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                        </div>

                                        <div className="flex items-center mb-2">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={
                                                        i < Math.floor(perfume.rating)
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                    }
                                                />
                                            ))}
                                            <span className="ml-2 text-sm text-gray-600">
                                                {perfume.rating.toFixed(1)}
                                            </span>
                                        </div>

                                        <p className="text-gray-700 mb-1">
                                            <strong>Brand:</strong> {perfume.brand}
                                        </p>
                                        <p className="text-gray-700 mb-2">
                                            <strong>Volume:</strong> {perfume.volume}
                                        </p>
                                        <p className="text-gray-800 mb-4 line-clamp-4">
                                            {perfume.description}
                                        </p>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                            <p className="text-2xl md:text-3xl font-bold text-purple-800">
                                                ₹{totalPrice}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <label className="text-gray-700 font-semibold">Quantity:</label>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    min={1}
                                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                                    className="w-20 p-2 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Buy button */}
                                    <button
                                        className="bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition-colors duration-300 shadow-lg text-lg w-full"
                                    // onClick={() =>
                                    //     alert(`Purchased ${quantity} x ${perfume.name} for ₹${totalPrice}!`)
                                    // }
                                    >
                                        {/* <Link to="order-now">Order Now</Link> */}
                                        <Link
                                            to="order-now"
                                            state={{
                                                perfume,
                                                quantity,
                                                totalPrice
                                            }}
                                            className="block text-center"
                                        >
                                            Order Now
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Second Related Perfume Data */}

                <div className="row">


                    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
                        {/* Heading */}
                        <h1 className="text-3xl md:text-5xl font-bold text-center py-8 text-purple-900">
                            Our Exclusive Perfumes
                        </h1>
                        <div className="sticky top-[67px] z-50 mx-4 md:mx-12 mb-6 p-4 bg-white/30 backdrop-blur-md border border-gray-200 rounded-md">
                            <input
                                type="text"
                                placeholder="Search Perfume..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full p-2 rounded bg-white/50 backdrop-blur-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12">
                            {filteredProducts.map((perfume) => (
                                <PerfumeCard key={perfume.id} perfume={perfume} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

const PerfumeCard = ({ perfume }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (!hovered && !isMobile) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % perfume.images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [hovered, isMobile, perfume.images.length]);

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
                <div className="">
                    <p className="mt-2 text-lg text-purple-800 font-bold">₹{perfume.price}</p>
                    <div className="">
                        <button
                            type="button"
                            className=" mt-2 bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors duration-300"
                        // onClick={() => alert(`Added ${perfume.name} to cart!`)}

                        >
                            <Link to='/shop/buy-product' state={perfume}>Buy Now</Link>
                        </button>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Buys;
