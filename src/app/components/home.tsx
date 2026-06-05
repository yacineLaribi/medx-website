"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Timer from "./timer";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#071952] flex items-center justify-center text-white overflow-hidden font-sans">

      {/* Subtle Grid */}
       <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(186,215,233,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(186,215,233,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div> 

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex justify-center"
        >
          <Image
            src="/medx/logo-2.png"
            alt="MEDX Logo"
            width={600}
            height={600}
            priority
            className="h-auto drop-shadow-[0_8px_16px_rgba(27,77,128,0.4)]"
          />
        </motion.div>
        {/* Title - always centered */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight bg-gradient-to-br from-[#F4F6FF] to-[#BAD7E9] bg-clip-text text-transparent drop-shadow-[0_4px_2px_rgba(27,77,128,0.6)] text-center w-[95vw] md:w-full max-w-[140%] mt-10"
        >
          Where Students Become Doctors .
        </motion.h1>


        {/* Outlined background text */}
        <div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="hidden sm:flex absolute left-0 top-1/2 w-full items-center justify-center -translate-y-1/2 z-0 pointer-events-none select-none mb-8"
          >
            <span
              className="text-[14vw] sm:text-[8vw] md:text-[6vw] font-extrabold tracking-tight"
              style={{
                WebkitTextStroke: "2px #10375c",
                color: "transparent",
                opacity: 0.13,
                lineHeight: 1,
                letterSpacing: "-0.05em",
                display: "block",
              }}
            >
              MEDX2026
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="flex sm:hidden w-full left-0 items-center justify-center"
          >
            <span
              className="text-[16vw] font-extrabold tracking-tight"
              style={{
                WebkitTextStroke: "2px #10375c",
                color: "transparent",
                opacity: 0.13,
                lineHeight: 1,
                letterSpacing: "-0.05em",
                display: "block",
              }}
            >
              MEDX2026
            </span>
          </motion.div>
        </div>


        {/* Dynamic Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <Timer targetDate="2026-07-10T14:00:00" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/register"
            className="
              mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-full
              bg-[#088395] text-[#F4F6FF] font-semibold text-lg
              hover:bg-[#071952]
              hover:shadow-[0_0_40px_rgba(27,77,128,0.9)]
              hover:scale-105
              transition-all duration-300
            "
          >
            Register Now →
          </Link>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 text-[#BAD7E9] text-xl"
      >
        ↓
      </motion.div>
    </section>
  );
}