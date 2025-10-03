import React from "react";
import Slider from "react-slick";

const categories = [
  {
    id: 1,
    title: "🎂 Birthday Gifts",
    image: "https://via.placeholder.com/400x300/ffcccc/990000?text=Birthday",
  },
  {
    id: 2,
    title: "💍 Anniversary Gifts",
    image: "https://via.placeholder.com/400x300/ffe5e5/990000?text=Anniversary",
  },
  {
    id: 3,
    title: "🎉 Festival Gifts",
    image: "https://via.placeholder.com/400x300/ffd6d6/990000?text=Festival",
  },
  {
    id: 4,
    title: "🏢 Corporate Gifts",
    image: "https://via.placeholder.com/400x300/ffb3b3/990000?text=Corporate",
  },
  {
    id: 5,
    title: "👶 Baby Shower Gifts",
    image: "https://via.placeholder.com/400x300/ffcfcf/990000?text=Baby+Shower",
  },
];

function CategoriesCarousel() {
  // slider settings
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
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // phone
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-red-50 px-6">
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
          <div key={cat.id} className="px-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-red-100 hover:scale-105 transition">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-red-700 mb-4">
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
    </section>
  );
}

export default CategoriesCarousel;
