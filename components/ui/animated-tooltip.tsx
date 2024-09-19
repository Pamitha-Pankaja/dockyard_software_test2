"use client";
import Image from "next/image";
import React, { useState, MouseEvent } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // This motion value will be updated on mouse move

  // Rotate the tooltip based on mouse x position
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // Translate the tooltip horizontally based on mouse x position
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  // Handle mouse move to set x position
  const handleMouseMove = (event: MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="relative group -mr-4"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center text-xs text-white rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="relative z-30 font-bold text-base">{item.name}</div>
                <div className="relative z-30 text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <Image
            onMouseMove={handleMouseMove}
            height={150}
            width={150}
            src={item.image}
            alt={item.name}
            className="relative object-cover object-top rounded-full h-45 w-45 border-2 group-hover:scale-105 group-hover:z-30 transition duration-500 border-white"
          />
        </div>
      ))}
    </>
  );
};

