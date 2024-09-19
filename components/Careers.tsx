"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function Careers() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-black-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
      >
        Build your Career <br /> With Us!
      </motion.h1>

    </LampContainer>
  );
}
