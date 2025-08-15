import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

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

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <section className="relative overflow-hidden">
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
                    </section>
                </div>
            </div>
        </>
    )
}
export default Home;