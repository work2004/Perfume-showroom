import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import {
  Star,
  Truck,
  Gift,
  ShieldCheck,
  Headphones,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function Dashboard() {
  // Catagory
  const categories = [
    {
      id: 1,
      title: "🎂 Birthday Gifts",
      image:
        "https://m.media-amazon.com/images/I/71kM7Yv0j0L._UF350,350_QL80_.jpg",
    },
    {
      id: 2,
      title: "Anniversary Gifts",
      image:
        "https://rukminim2.flixcart.com/image/480/640/kmp7ngw0/chocolate/j/e/a/144-anniversary-gift-for-husband-anniversary-gift-for-wife-original-imagfjmmmgk73nzn.jpeg?q=90",
    },
    {
      id: 3,
      title: "Festival Gifts",
      image:
        "https://m.media-amazon.com/images/I/81LMvNJtSTL._UF350,350_QL80_.jpg",
    },
    {
      id: 4,
      title: "Stone Statue",
      image:
        "https://artehouse.in/cdn/shop/files/KRISHNA-STATUE-WITH-COW-IN-MARBLE-DUST-POLY-RESIN-INDOOR.jpg?v=1706593929",
    },
    {
      id: 5,
      title: "Corporate Gifts",
      image:
        "https://happydeals4u.in/wp-content/uploads/2022/10/IMG-20221011-WA0023-800x800.jpg",
    },
    {
      id: 6,
      title: "Hanging Mirror",
      image: "https://m.media-amazon.com/images/I/71S+Az0-BuL.jpg",
    },
  ];
  // slider settingsRevie

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Large Phone
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Small Phone
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const offerEnd = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hrs

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEnd - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      icon: <Truck className="w-10 h-10 text-red-600" />,
      title: "Free Shipping",
      desc: "Enjoy free & fast delivery on all orders without extra charges.",
    },
    {
      id: 2,
      icon: <Gift className="w-10 h-10 text-red-600" />,
      title: "Premium Packaging",
      desc: "Every gift is wrapped with love in premium, eco-friendly packaging.",
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      title: "Secure Payments",
      desc: "Shop confidently with our 100% secure & trusted payment gateway.",
    },
    {
      id: 4,
      icon: <Headphones className="w-10 h-10 text-red-600" />,
      title: "24/7 Support",
      desc: "Our dedicated support team is here to assist you anytime.",
    },
  ];
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      feedback:
        "Absolutely loved the gift packaging! It was delivered on time and my husband was so happy. Will definitely shop again 🎁",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Verma",
      feedback:
        "Beautiful collection and very budget friendly. The anniversary gift made my wife smile instantly ❤️",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Sneha Kapoor",
      feedback:
        "The personalized photo frame was just perfect! Thank you for making our day extra special ✨",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
    },
  ];

  // Slider settings
  const settingsRevie = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Verma",
      role: "Creative Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amit Patel",
      role: "Store Manager",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Prity Singh",
      role: "Customer Support",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const faqs = [
    {
      question: "📦 Delivery kitne dino me milegi?",
      answer:
        "Aapke order ko 3-5 working days ke andar safely deliver kar diya jata hai. Local delivery aur bhi fast hoti hai.",
    },
    {
      question: "🔄 Return policy kya hai?",
      answer:
        "Agar product damage ya defective hai to aap 7 din ke andar return request kar sakte ho. Hum turant replacement ya refund kar denge.",
    },
    {
      question: "💳 Payment safe hai kya?",
      answer:
        "Ji haan ✅ humare payment gateway 100% secure hai. Aap UPI, NetBanking, Debit/Credit card ya COD use kar sakte ho.",
    },
    {
      question: "🎁 Kya aap gift wrapping provide karte ho?",
      answer:
        "Haan, hum free gift wrapping aur personalized message card provide karte hain taki aapka gift aur bhi special lage.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const instaPosts = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3OvlblPfNvixHEDsD5Ueco9NTzH1CHi73w&s",
    "https://ds393qgzrxwzn.cloudfront.net/resize/c500x500/cat1/img/images/0/DU81Ymlwu3.jpg",
    "https://c3.staticsfly.com/asset/fetch/cs/KEEPSAKEBOX-444088-6039-MERCHLARGE_FRONT/thumbnail.preview/v1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBF_UjEJ5uYcm771vWtWnhrHrMNUK0pJkPOfR5HUsyHnh3hG6SFLJuY4ISn8oMl_1IPto&usqp=CAU",
    "https://www.onegift.bg/files/products/tn/Luxury-Gift-for-Woman-One-Gift-73161.jpg",
    "https://imgcdn.stablediffusionweb.com/2024/12/19/5e2a49f3-f504-4635-ab90-47beba3f5221.jpg",
  ];
  return (
    <>
      <div className="bg-white py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold shadow">
              🎁 Gift Your Loved Ones
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-red-700">
              Celebrate Every Moment <br />
              <span className="text-red-600">With Love</span>
            </h1>
            <p className="text-lg text-red-700/80">
              Discover our handpicked collection of gifts for every occasion.
              Wrapped with love, designed to bring smiles.
            </p>

            <div className="flex gap-4">
              <a
                href="#products"
                className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700 transition"
              >
                Shop Now
              </a>
              <a
                href="#collection"
                className="px-6 py-3 border border-red-600 rounded-full font-semibold text-red-600 hover:bg-red-50 transition"
              >
                Explore Collection
              </a>
            </div>
          </motion.div>

          {/* Right Poster Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-red-100"
          >
            <img
              src="https://heavy.com/wp-content/uploads/2020/12/Unique-Christmas-gifts-for-her.jpg?quality=65&strip=all"
              alt="Gift Poster"
              className="w-full h-72 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* cetegroy */}

      <div className="py-16 bg-red-50 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
            Shop by Category
          </h2>
          <p className="text-red-600/80 mt-2">
            Auto-sliding categories for every occasion 🎁
          </p>
        </div>

        <Slider {...settings}>
          {categories.map((cat) => (
            <div key={cat.id} className="px-2 sm:px-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-red-100 hover:scale-105 transition">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-48 object-contain bg-red-50"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-red-700 mb-4">
                    {cat.title}
                  </h3>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-red-50 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Offer Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <span className="bg-red-600 text-white px-4 py-1 rounded-full font-semibold shadow">
              🔥 Special Offer
            </span>
            <h2 className="text-4xl font-extrabold text-red-700">
              Flat 20% OFF <br /> On All Gifts
            </h2>
            <p className="text-lg text-red-700/80">
              Hurry! Offer valid for a limited time only. Celebrate love, joy,
              and surprises with our premium gifts.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center md:justify-start gap-4 text-center">
              <div className="bg-white shadow-lg rounded-lg p-4 w-20">
                <h3 className="text-2xl font-bold text-red-600">
                  {timeLeft.hours}
                </h3>
                <p className="text-sm text-red-700">Hours</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 w-20">
                <h3 className="text-2xl font-bold text-red-600">
                  {timeLeft.minutes}
                </h3>
                <p className="text-sm text-red-700">Mins</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4 w-20">
                <h3 className="text-2xl font-bold text-red-600">
                  {timeLeft.seconds}
                </h3>
                <p className="text-sm text-red-700">Secs</p>
              </div>
            </div>

            {/* Shop Now Button */}
            <a
              href="#products"
              className="inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700 transition"
            >
              Shop Now
            </a>
          </motion.div>

          {/* Right Offer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-red-100"
          >
            <img
              src="https://www.shutterstock.com/image-photo/excited-attractive-woman-many-gift-260nw-42697594.jpg"
              alt="Special Offer"
              className="w-full h-72 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
            🛡️ Why Choose Us
          </h2>
          <p className="text-red-600/80 mt-2">
            We make gifting easier, safer & more special for you 🎁
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl shadow-lg p-6 text-center border border-red-100 hover:scale-105 transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-red-600/80 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Store */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
              🎀 About Our Store
            </h2>
            <p className="text-red-600/80 leading-relaxed">
              Welcome to <span className="font-semibold">GiftStore</span> – your
              one-stop destination for unique, personalized, and heartfelt
              gifts. We believe in celebrating every moment with love, smiles,
              and surprises 🎁
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-700">
                <Phone className="w-6 h-6 text-red-600" />
                <span className="font-medium">+91 ****** *****</span>
              </div>
              <div className="flex items-center gap-3 text-red-700">
                <Mail className="w-6 h-6 text-red-600" />
                <span className="font-medium">sonusingh@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-red-700">
                <MapPin className="w-6 h-6 text-red-600" />
                <span className="font-medium">New Delhi</span>
              </div>
            </div>
          </motion.div>

          {/* Map Location */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border border-red-100"
          >
            <iframe
              title="store-location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1555.4264832516217!2d77.34368367012183!3d28.487218029382348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1759447961403!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>

      <div className="bg-red-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-red-700 mb-4"
          >
            Meet Our Team
          </motion.h2>
          <p className="text-red-700/80 mb-12 max-w-2xl mx-auto">
            Behind every smile we deliver, there’s a passionate team working
            hard to make your moments memorable. 🌸
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-red-100"
                />
                <h3 className="text-xl font-semibold text-red-700">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 text-center mb-6">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-center text-red-600/80 mb-12">
            Customers ke common doubts yaha clear kiye gaye hai 👇
          </p>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-red-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-red-700 hover:bg-red-50 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-red-600/90"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-red-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-4">
            📸 Follow Us On Instagram
          </h2>
          <p className="text-red-600/80 mb-10">
            Live gallery of our latest gifts & collections 🎁
          </p>

          {/* Instagram Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {instaPosts.map((post, index) => (
              <motion.a
                key={index}
                href="https://instagram.com" // 👉 apne insta page ka link dal do
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-md border border-red-100"
              >
                <img
                  src={post}
                  alt={`Instagram Post ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
            >
              👉 Visit Our Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="bg-red-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
            ❤️ What Our Customers Say
          </h2>
          <p className="text-red-600/80 mt-2">
            Real stories from happy gift lovers 🎁
          </p>
        </div>

        <Slider {...settingsRevie}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="px-4"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border border-red-100">
                <div className="flex flex-col items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full border-4 border-red-100 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-red-700">
                    {review.name}
                  </h3>
                  <div className="flex justify-center my-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-red-600/80 text-lg leading-relaxed">
                    “{review.feedback}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Dashboard;
