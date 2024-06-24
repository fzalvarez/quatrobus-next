"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { SvgAdvantages } from "@/svg";

interface Props {
  items: {
    icon: string;
    title: string;
    description: string;
    color: string;
  }[];
}

export default function AdvantagesSlider({ items }: Props) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        modules={[Autoplay, Pagination]}
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        wrapperClass="!pb-9"
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            enabled: false,
            loop: false,
            pagination: false,
            autoplay: false,
          },
        }}
      >
        {items.map((item, id) => (
          <SwiperSlide key={`advantage_${id}`} className="px-3">
            <div
              className={`relative h-32 lg:h-36 bg-white rounded-large shadow-xl overflow-hidden w-full flex flex-col justify-end p-4 group `}
            >
              <div
                className={`absolute p-3 lg:p-4 top-2 right-4 rounded-full ${item.color} grid place-items-center z-0 duration-200 lg:group-hover:scale-[800%]`}
              >
                <SvgAdvantages
                  name={item.icon}
                  className="text-white text-xs lg:text-sm lg:group-hover:opacity-0 duration-200"
                />
              </div>
              <span className="font-bold text-sm lg:hidden">{item.title}</span>
              <div className="max-lg:hidden absolute z-10 left-0 top-24 lg:top-[6.5rem] duration-200 lg:group-hover:top-4 lg:group-hover:text-white flex flex-col gap-2 w-full px-4">
                <span className="font-bold">{item.title}</span>
                <p className="text-xs opacity-0 delay-0 -translate-x-3 lg:group-hover:translate-x-0 duration-300 lg:group-hover:delay-200 lg:group-hover:opacity-100 text-white">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
