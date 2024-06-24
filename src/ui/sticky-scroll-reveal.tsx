"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib";
import Image, { StaticImageData } from "next/image";
import { SvgCheck, SvgModules } from "@/svg";

export function StickyScroll({
  content,
  contentClassName,
  translations,
}: {
  content: {
    idx: string;
    title: string;
    subtitle: string;
    color: string;
    benefits: string[];
    features: string[];
    image: StaticImageData;
  }[];
  contentClassName?: string;
  translations: {
    benefits: string;
    features: string;
  };
}) {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });
  return (
    <motion.div ref={ref} className="flex justify-center relative w-full">
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div
              id={item.idx}
              key={`content_${index}_${item.idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="flex flex-col gap-6 py-10 lg:py-20 scroll-m-14"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-full ${item.color} grid place-items-center p-2 lg:p-3`}
                >
                  <SvgModules
                    className="text-white text-xs lg:text-lg"
                    idx={index}
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="font-bold text-sm text-primary-800 lg:text-xl">
                    {item.title}
                  </h2>
                  <p className="text-xs lg:text-small">{item.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-sm lg:text-base">
                  {translations.benefits}
                </p>
                <ul className="pl-6 space-y-1">
                  {item.benefits.map((benefit, idx) => (
                    <li
                      className="flex items-start text-xs gap-2 lg:text-base lg:items-center"
                      key={`benefit_${index}_${idx}`}
                    >
                      <SvgCheck className="text-success w-4 min-w-4" />{" "}
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-sm lg:text-base">
                  {translations.features}
                </p>
                <ul className="pl-6 space-y-1">
                  {item.features.map((feature, idx) => (
                    <li
                      className="flex items-start text-xs gap-2 lg:text-base lg:items-center"
                      key={`feature_${index}_${idx}`}
                    >
                      <SvgCheck className="text-success w-4 min-w-4" />{" "}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start sticky top-32 pt-10 pb-20 h-full sm:items-center">
        <div
          className={`rounded-t-xl grid place-items-center duration-300 ${content[activeCard].color} p-4 size-[70px] sm:h-auto sm:w-[70px] sm:py-2`}
        >
          <span className="text-3xl font-bold text-white">
            0{activeCard + 1}
          </span>
        </div>
        <div className="rounded-bl-xl sm:rounded-xl shaodw-xl sm:aspect-[4/3] h-60 max-sm:w-28 overflow-hidden lg:h-72">
          <Image
            src={content[activeCard].image}
            alt={content[activeCard].title}
            className="object-cover h-full w-full object-center"
          />
        </div>
      </div>
    </motion.div>
  );
}
