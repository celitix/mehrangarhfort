"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Carousel() {
  const slides = [
    {
      img: "/assets/sunset.jpg",
      title: "Sunset Viewpoints",
      text: `Mehrangarh Fort offers some of the most breathtaking sunset views in Rajasthan. As the sun begins to set, the entire Blue City below glows in shades of gold, orange, and deep blue, creating a magical panorama that leaves visitors spellbound.`,
    },
    {
      img: "/assets/zipline.jpg",
      title: "Zipline Adventure",
      text: `For thrill-seekers, Mehrangarh Fort offers an exciting zipline experience operated by a certified adventure team. This activity lets you glide over rugged cliffs, lush desert rock parks, and serene lakes—providing a perspective of the fort unlike any other.`,
    },
    {
      img: "/assets/museum.jpg",
      title: "Museum Tour",
      text: `Mehrangarh Fort houses one of India’s finest palace museums, showcasing centuries of royal history and artistic excellence. Each gallery is curated with precision to reflect the lifestyle, culture, and royal traditions of the Marwar dynasty.`,
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        rtl={true}
        dir="rtl"
        autoplay={{ delay: 2000 }}
        style={{ direction: "rtl" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse md:flex-row w-full h-full">

    {/* RIGHT YELLOW SECTION */}
              <div className="bg-[#ddaf6c] w-full md:w-1/2 flex flex-col justify-center p-20 text-center">
                <h2 className="font-raleway text-4xl font-bold mb-6">{slide.title}</h2>
                <p className="font-gentium text-white text-xl font-medium leading-relaxed antialiased max-w-xl mx-auto">
                  {slide.text}
                </p>
              </div>



              {/* LEFT GRAY SECTION */}
              <div className="bg-[#f0f0f0] w-full md:w-1/2 flex justify-center items-center py-10">
                <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center border-4 border-white shadow-lg">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
