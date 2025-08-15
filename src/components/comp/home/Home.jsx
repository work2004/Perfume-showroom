import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

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

    const perfumes = [
        {
            name: "Royal Essence",
            price: "₹920",
            image: "https://cdn.pixabay.com/photo/2021/05/02/14/53/perfume-6223754_1280.jpg",
        },
        {
            name: "Velvet Bloom",
            price: "₹995",
            image: "https://boisdejasmin.com/images/old/6a00d8341c706153ef0147e24f5e2d970b-pi.jpg",
        },
        {
            name: "Amber Nights",
            price: "₹850",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLJsXgGWW3pEcg_NT9QKdOKNTZ34TKGV37g&s",
        },
        {
            name: "Jaguar Perfume",
            price: "₹480",
            image: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000007906649_437Wx649H_202407190006164.jpeg",
        },
        {
            name: "Jaguar Perfume",
            price: "₹280",
            image: "https://m.media-amazon.com/images/I/61uXQC-ja-L._AC_SY200_QL15_.jpg",
        },

    ];

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
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                                Featured Perfumes
                            </h2>

                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.8 }}
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                                    >
                                        {perfumes
                                            .slice(currentIndex, currentIndex + 3)
                                            .map((perfume, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                                >
                                                    <img
                                                        src={perfume.image}
                                                        alt={perfume.name}
                                                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 rounded-t-2xl"
                                                    />
                                                    <div className="p-5 text-center">
                                                        <h3 className="text-lg font-semibold text-gray-900">
                                                            {perfume.name}
                                                        </h3>
                                                        <p className="text-purple-700 font-medium mt-1">
                                                            {perfume.price}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                    </motion.div>
                                </AnimatePresence>
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
            </div>
        </>
    )
}
export default Home;