import React from "react";
import Image4 from "./Images4.png";
import Image from "./Image.png";
import Image2 from "./Image2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image4,
    title: "30% Off on Women's Wear",
    discription: "Discover the latest trends in women’s fashion at unbeatable prices.",
  },
  {
    id: 2,
    img: Image,
    title: "20% Off for Big Sellers",
    discription: "Shop our top-rated products with exclusive deals just for you.",
  },
  {
    id: 3,
    img: Image2,
    title: "50% Off for Kids",
    discription: "Get stylish and comfy outfits for kids – now half the price!",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-orange-100 to-yellow-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-300 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      {/* Slider Container */}
      <div className="w-full max-w-6xl px-4 z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 py-12">
                {/* Text Content */}
                <div className="max-w-xl space-y-6">
                  <h1  data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h1>
                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-lg text-gray-600 dark:text-gray-300">
                    {data.discription}
                  </p>
                  <div>
                    <button className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-200">
                      Shop Now
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 sm:order-2">

                  <div data-aos="zoon-in" data-aos-once="true" className="relative z-10">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[300px] h-[230px] object-contain drop-shadow-2xl"
                  />
                </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
