import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostGresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="relative max-h-screen ">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none">
        <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-purple-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div> */}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-5 text-center text-4xl py-8"
      >
        Technologies We Use
      </motion.h1>

      {/* Icon Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-8 md:px-20"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="group relative rounded-3xl bg-black/20 backdrop-blur-md p-4 shadow-lg border border-white/10 hover:shadow-cyan-500/50 transition duration-300"
        >
          <RiReactjsLine className="text-6xl text-cyan-400 group-hover:scale-110 transition-transform duration-300 mx-auto" />
          <h2 className="mt-2 text-center text-sm font-medium">React.js</h2>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="group relative rounded-3xl bg-black/20 backdrop-blur-md p-4 shadow-lg border border-white/10 hover:shadow-gray-400/50 transition duration-300"
        >
          <TbBrandNextjs className="text-6xl text-white group-hover:scale-110 transition-transform duration-300 mx-auto" />
          <h2 className="mt-2 text-center text-sm font-medium">Next.js</h2>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="group relative rounded-3xl bg-black/20 backdrop-blur-md p-4 shadow-lg border border-white/10 hover:shadow-green-500/50 transition duration-300"
        >
          <SiMongodb className="text-6xl text-green-500 group-hover:scale-110 transition-transform duration-300 mx-auto" />
          <h2 className="mt-2 text-center text-sm font-medium">MongoDB</h2>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="group relative rounded-3xl bg-black/20 backdrop-blur-md p-4 shadow-lg border border-white/10 hover:shadow-green-500/50 transition duration-300"
        >
          <FaNodeJs className="text-6xl text-green-500 group-hover:scale-110 transition-transform duration-300 mx-auto" />
          <h2 className="mt-2 text-center text-sm font-medium">Node.js</h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
