"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none z-0 top-0">
      <div className="absolute inset-0 h-full w-full bg-primary pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent,white)]"></div>
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="flex" key={`grid_${i}`}>
          {Array.from({ length: 11 }).map((_, id) => (
            <div
              key={`area_${i}_${id}`}
              className="flex flex-col items-start justify-center w-60"
            >
              <div className="flex items-center justify-center">
                <div className="h-6 w-6 bg-primary-800/10 flex items-center justify-center rounded-full">
                  <div className="h-2 w-2 bg-primary-600 rounded-full"></div>
                </div>
                <svg
                  width="230"
                  height="1"
                  viewBox="0 0 230 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-800/20"
                >
                  <path d="M0.5 0.5H479" stroke="currentColor"></path>
                  <path
                    d="M0.5 0.5H479"
                    stroke={`url(#gradient-:${i}_${id}:)`}
                    strokeWidth="1"
                  ></path>
                  <defs>
                    <motion.linearGradient
                      id={`gradient-:${i}_${id}:`}
                      gradientUnits="userSpaceOnUse"
                      initial={{
                        x1: -200,
                        x2: 0,
                      }}
                      animate={{
                        x1: 230,
                        x2: 430,
                      }}
                      transition={{
                        type: "keyframes",
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                        delay: Math.round(Math.random() * 5 + id),
                        repeatDelay: Math.round(Math.random() * 5 + id),
                      }}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="transparent"></stop>
                      <stop offset="50%" stopColor="#ccddee"></stop>
                      <stop offset="100%" stopColor="transparent"></stop>
                    </motion.linearGradient>
                  </defs>
                </svg>
              </div>
              <svg
                width="1"
                height="140"
                viewBox="0 0 1 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-800/25 ml-3"
              >
                <path
                  d="M0.5 0.5V479"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M0.5 0.5V479"
                  stroke={`url(#gradient-:${i}_${id}_2:)`}
                  strokeWidth="2"
                ></path>
                <defs>
                  <motion.linearGradient
                    id={`gradient-:${i}_${id}_2:`}
                    gradientUnits="userSpaceOnUse"
                    initial={{
                      y1: -200,
                      y2: 0,
                    }}
                    animate={{
                      y1: 140,
                      y2: 340,
                    }}
                    transition={{
                      type: "keyframes",
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                      delay: Math.round(Math.random() * 5 + id),
                      repeatDelay: Math.round(Math.random() * 5 + id),
                    }}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="#ccddee"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </motion.linearGradient>
                </defs>
              </svg>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
