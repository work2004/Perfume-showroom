import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, Gift, Shield } from "lucide-react"; // icons
import Footer from "../../section/footer/Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const scaleIn = {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Home() {
    const perfumeImages = [
        "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?q=80&w=1200&auto=format&fit=crop",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShb1EU71LsngXgMbhaNiUwId-IHLp3QKkvgBbJbPD8s9Crs-IQek5PIYWHqxJvp87SYpo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fFY2Fokk3rixuWifGaGZQXKNtIbWVbK8Js9dMH6qvxH55ErtCcjrosYA2pfU1FIGP4Q&usqp=CAU",
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % perfumeImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % perfumes.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    const categories = [
        {
            name: "For Man",
            img: "https://i.ebayimg.com/images/g/nEwAAOSwUohnXIhA/s-l1200.jpg",
            link: "/shop?category=him",
        },
        {
            name: "For Women",
            img: "https://images.meesho.com/images/products/398735143/h8piv_512.webp?width=512",
            link: "/shop?category=her",
        },
        {
            name: "For Couples",
            img: "https://www.shutterstock.com/image-photo/passionate-woman-handsome-man-using-600nw-1068861017.jpg",
            link: "/shop?category=unisex",
        },
        {
            name: "Love At First Sniff",
            img: "https://www.scentbird.com/blog/wp-content/uploads/2025/04/ea6c2ac0-1ad5-4a5b-bd8e-721a0be709a1.png",
            link: "/shop?category=unisex",
        },
        {
            name: "First Love",
            img: "https://cdn.prod.website-files.com/61a5d57e5f1c45eecb23d528/668e224ebf664077c91872b3_7%20aphrodisiacs%20women%20thumb.jpg",
            link: "/shop?category=unisex",
        },
        {
            name: "Fresh For You",
            img: "https://zntus.com/wp-content/uploads/2025/01/best-perfumes-for-women.png",
            link: "/shop?category=unisex",
        }


    ];
    const features = [
        {
            icon: <Truck className="w-10 h-10 text-purple-600" />,
            title: "Free Shipping",
            description: "Get your favorite perfumes delivered to your doorstep without any extra cost.",
        },
        {
            icon: <Gift className="w-10 h-10 text-purple-600" />,
            title: "Premium Packaging",
            description: "Every perfume comes in elegant packaging, perfect for gifting.",
        },
        {
            icon: <Shield className="w-10 h-10 text-purple-600" />,
            title: "100% Authentic",
            description: "We guarantee original fragrances sourced from top luxury brands.",
        },
    ];

    // for Feedback code here
    const reviews = [
        {
            name: "Aarav Singh",
            role: "Luxury Enthusiast",
            comment: "Absolutely loved the fragrance! Elegant, long-lasting, and perfectly packaged.",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Meera Sharma",
            role: "Perfume Collector",
            comment: "The scents are exquisite. I can feel the luxury in every bottle.",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Rohan Kapoor",
            role: "Gift Buyer",
            comment: "Bought this as a gift and it was a huge hit! Premium feel and amazing aroma.",
            img: "https://randomuser.me/api/portraits/men/56.jpg",
        },
    ];
    const [index2, setIndex2] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex2((prev) => (prev + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // time limit code heres
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5); // Offer ends in 5 days

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const perfumes = [
        { name: "Rose Essence", price: "$120", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuZ4Cq0glDaZctp-MUHtoIDyQSJ3qu8paag&s" },
        { name: "Amber Delight", price: "$150", image: "https://cdn-jplbd.nitrocdn.com/ZtNzbyfaurmWxnYQHAjGXcKTQXuJwHgK/assets/images/optimized/rev-605c21c/nosemuse.com/wp-content/uploads/2023/08/athena9280_An_elegantly_designed_perfume_bottle_placed_on_a_ped_02578292-3bee-4bc5-bb64-562caf7dca48.png" },
        { name: "Citrus Bliss", price: "$95", image: "https://images-static.nykaa.com/media/catalog/product/e/1/e1bb8cfFREAI00000085b_b5.jpg?tr=w-500" },
        { name: "Rose Essence", price: "$130", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WeKTq9rk9omKvtKDVWFDObBxus7VBiw5Eg&s" },
        { name: "Musk Aura", price: "$140", image: "https://static.vecteezy.com/system/resources/thumbnails/057/278/453/small_2x/mockup-clear-limpid-glass-packaging-perfume-bottle-in-black-fabric-photo.jpg" },
    ];

    const [currentIndexs, setCurrentIndexs] = useState(0);

    // Auto-slide every 3s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexs((prev) => (prev + 1) % perfumes.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndexs((prev) => (prev + 1) % perfumes.length);
    };

    const prevSlide = () => {
        setCurrentIndexs((prev) => (prev - 1 + perfumes.length) % perfumes.length);
    };

    const visiblePerfumes = [];
    const slidesToShow = window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 3;
    for (let i = 0; i < slidesToShow; i++) {
        visiblePerfumes.push(perfumes[(currentIndex + i) % perfumes.length]);
    }



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="relative overflow-hidden">
                        <div className="pointer-events-none absolute inset-0 -z-10">
                            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl" />
                            <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-pink-300/30 blur-3xl" />
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-2 gap-10 items-center pt-10 md:pt-16 pb-16">
                                <motion.div variants={fadeUp} initial="hidden" animate="show" className="text-center md:text-left">
                                    <p className="tracking-widest uppercase text-xs font-semibold text-purple-600">Luxury Perfumes</p>
                                    <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                                        Discover Your <span className="text-purple-600">Signature</span> Scent
                                    </h1>
                                    <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
                                        Curated perfumes from niche and designer houses. Crafted to elevate every moment — day or night.
                                    </p>
                                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                                        <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#featured" className="px-5 py-3 rounded-full bg-purple-600 text-white shadow-lg">
                                            Browse Collection
                                        </motion.a>
                                        <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#reviews" className="px-5 py-3 rounded-full bg-white border border-purple-200 text-purple-700 shadow">
                                            Read Reviews
                                        </motion.a>
                                    </div>
                                </motion.div>

                                <motion.div variants={scaleIn} initial="hidden" animate="show" className="relative">
                                    {/* bottle image */}
                                    {/* <img
                                        src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?q=80&w=1200&auto=format&fit=crop"
                                        alt="Luxury Perfume Bottle"
                                        className="w-full h-auto max-h-[500px] sm:max-h-[350px] object-contain mx-auto rounded-[2rem] shadow-2xl"
                                    /> */}

                                    <motion.img
                                        key={index}
                                        src={perfumeImages[index]}
                                        alt="Luxury Perfume"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full h-auto max-h-[450px] object-contain mx-auto rounded-[2rem] shadow-2xl"
                                    />

                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="absolute -right-4 top-6 backdrop-blur-md bg-white/60 border border-white/50 rounded-2xl px-4 py-2 shadow"
                                    >
                                        <div className="text-xs uppercase tracking-wider text-gray-700">Notes</div>
                                        <div className="mt-1 flex gap-2 text-xs text-gray-900">
                                            <span className="px-2 py-0.5 rounded-full bg-purple-100">Vanilla Perfume</span>
                                            <span className="px-2 py-0.5 rounded-full bg-purple-100">Musk Perfume</span>
                                            <span className="px-2 py-0.5 rounded-full bg-purple-100">Danver Perfume </span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="py-12 bg-gradient-to-r from-amber-900 via-[#2c1810] to-black">
                        <div className="max-w-7xl mx-auto px-4 relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                                Featured Perfumes
                            </h2>

                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndexs}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.8 }}
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                                    >
                                        {visiblePerfumes.map((perfume, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <img
                                                    src={perfume.image}
                                                    alt={perfume.name}
                                                    className="w-full h-64 sm:h-52 md:h-64 object-cover rounded-t-2xl"
                                                />
                                                <div className="p-5 text-center">
                                                    <h3 className="text-lg font-semibold text-gray-900">{perfume.name}</h3>
                                                    <p className="text-purple-700 font-medium mt-1">{perfume.price}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
                                >
                                    &#8592;
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
                                >
                                    &#8594;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <section className="py-16 bg-gradient-to-r from-purple-50 via-white to-purple-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.h2
                                className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Explore <span className="text-purple-600">Categories</span>
                            </motion.h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {categories.map((cat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                                    >
                                        <Link to={cat.img}>
                                            <img
                                                src={cat.img}
                                                alt={cat.name}
                                                className="w-full h-64 object-cover rounded-2xl transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-white text-xl font-semibold">{cat.name}</span>
                                            </div>
                                            <h2 className="text-center text-2xl font-bold py-1">{cat.name}</h2>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="row">
                    <div className="py-16 bg-gradient-to-r from-purple-50 via-white to-purple-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <motion.h2
                                className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Luxury You <span className="text-purple-600">Can Trust</span>
                            </motion.h2>
                            <motion.p
                                className="text-gray-600 max-w-xl mx-auto mb-12"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Experience the luxury, quality, and trust that set our perfumes apart.
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, duration: 0.6 }}
                                    >
                                        <div className="flex justify-center mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="py-16 bg-gradient-to-r from-purple-50 via-white to-purple-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                The Essence of <span className="text-purple-600">Reviews</span>
                            </h2>

                            <div className="relative overflow-hidden">
                                <motion.div
                                    key={index2}
                                    initial={{ x: 300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -300, opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="flex gap-6 justify-center"
                                >
                                    {[0, 1, 2].map((offset) => {
                                        const review = reviews[(index + offset) % reviews.length];
                                        return (
                                            <div
                                                key={offset}
                                                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center min-w-[250px] max-w-[300px] hover:shadow-2xl transition-shadow duration-300"
                                            >
                                                <img
                                                    src={review.img}
                                                    alt={review.name}
                                                    className="w-20 h-20 rounded-full mb-4 object-cover"
                                                />
                                                <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                                                <p className="text-purple-600 text-sm mb-2">{review.role}</p>
                                                <p className="text-gray-600 text-center">{review.comment}</p>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <motion.h2
                                className="text-3xl md:text-4xl font-extrabold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                Limited Time <span className="text-yellow-300">Offer!</span>
                            </motion.h2>

                            <motion.p
                                className="text-lg md:text-xl mb-8 max-w-xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Grab your favorite luxury perfumes at exclusive discounted prices. Don’t miss out!
                            </motion.p>
                            <div className="flex justify-center gap-6 text-center mb-8">
                                {["days", "hours", "minutes", "seconds"].map((unit) => (
                                    <motion.div
                                        key={unit}
                                        className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 min-w-[70px]"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="text-2xl font-bold">
                                            {timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}
                                        </div>
                                        <div className="text-xs uppercase tracking-wide">{unit}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.a
                                href="/shop"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-8 py-3 rounded-full bg-yellow-300 text-purple-700 font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Shop Now
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;