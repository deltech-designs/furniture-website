import React, { useEffect, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaPlus } from "react-icons/fa6";
import "swiper/css/bundle";

export default function Slider({ sliders }) {
  // console.log(products.image);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-[372px] h-[486px] relative">
      <button className="absolute top-1/2  -left-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center z-10">
        &#10094;
      </button>
      <button className="absolute top-1/2  -right-5 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center z-10">
        &#10095;
      </button>
      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".-right-6",
          prevEl: ".-left-4",
        }}
        spaceBetween={500}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliders?.map((data) => (
          <div>
            <SwiperSlide key={data.id}>
              <div className="w-[372px] h-[486px]">
                <img
                  src={data.img}
                  className="w-full object-cover object-center"
                  alt={data.title}
                />
              </div>
            </SwiperSlide>
            ;
          </div>
        ))}
      </Swiper>
    </div>
  );
}
