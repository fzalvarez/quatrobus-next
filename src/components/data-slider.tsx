"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  translations: {
    experience: string;
    clients: string;
    tickets: string;
  };
}

export default function DataSlider({ translations }: Props) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true }}
        wrapperClass="!pb-9"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            enabled: false,
            loop: false,
            pagination: false,
            autoplay: false,
          },
        }}
      >
        <SwiperSlide className="px-2">
          <div className="h-36 rounded-xl grid place-items-center p-6 bg-primary text-white lg:h-40 shadow-xl">
            <span className="font-bold text-5xl lg:text-6xl">+20</span>
            <p className="text-center text-balance text-sm">
              {translations.experience}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-2">
          <div className="h-36 rounded-xl grid place-items-center p-6 bg-secondary text-white lg:h-40 shadow-xl">
            <span className="font-bold text-5xl lg:text-6xl">+45</span>
            <p className="text-center text-balance text-sm">
              {translations.clients}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-2">
          <div className="h-36 rounded-xl grid place-items-center p-6 bg-success text-white lg:h-40 shadow-xl">
            <span className="font-bold text-5xl lg:text-6xl">+20M</span>
            <p className="text-center text-balance text-sm">
              {translations.tickets}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
