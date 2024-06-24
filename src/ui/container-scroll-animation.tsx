"use client";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

import Image from "next/image";

import Hero_2 from "@/assets/hero_2.png";
import Hero_3 from "@/assets/Hero_3.png";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:pt-40 md:pb-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        <div className="absolute bottom-64 md:bottom-96 left-1/2 -translate-x-1/2 z-0 w-screen bg-primary-200 h-10 rounded-[100%] blur-2xl lg:h-24 lg:blur-[54px]"></div>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const [end, setEnd] = React.useState(false);

  useMotionValueEvent(rotate, "change", (latest) => {
    if (latest < 5) {
      setEnd(true);
    } else {
      setEnd(false);
    }
  });

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl relative z-10"
    >
      <div
        className={`h-full w-full overflow-hidden rounded-2xl md:rounded-2xl`}
      >
        {children}
      </div>
      <AnimatePresence>
        {end && (
          <>
            <motion.div
              key="image_1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -right-14 lg:-left-20 lg:right-auto -bottom-20 aspect-[9/16]"
            >
              <Image src={Hero_2} alt="" className="h-full w-auto" />
            </motion.div>
            <motion.div
              key="image_2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -right-20 -bottom-20 aspect-[9/16] flex items-end justify-end max-lg:hidden"
            >
              <Image src={Hero_3} alt="" className="w-full h-auto" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
