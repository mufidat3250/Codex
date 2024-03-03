"use client";
import React from "react";
import "./style.scss";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  };
  const itemVarients = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <div className="hero container">
      <motion.div
        className="hero-desc"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Codext one of the best system in
          <span className="relative">
            <span className="text-[#2657A4] z-[1000]"> SAAS.</span>
            <Image
              src="/vectors/Vector 6.svg"
              alt="vector"
              height={2}
              className="line"
              width={300}
            />
          </span>
        </motion.span>

        <motion.p variants={itemVarients}>
        Impressive statistics and counters proudly display our platforms impact, from the number of enrolled users to the total hours of available courses
        </motion.p>
        <motion.div
          className="w-[13.5rem] self-center md:self-start"
          variants={itemVarients}
        >
          <Button bgColor="#2657A4"/>
        </motion.div>
      </motion.div>
      <motion.div
        className="heroImg-wrapper"
        variants={{
          hidden: { opacity: 0, x: 500 },
          visible: { opacity: 1, x: 0, transition:{duration:0.8, type:'spring'}},
        }}
        initial='hidden'
        animate='visible'
      >
        {/* <Image
          src="/images/hero.png"
          alt="hero"
          layout="fill"
          objectFit="contain"
          sizes="100%"
          className=""
        /> */}

        <img src="/images/hero.png" alt="hero" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
