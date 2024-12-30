import { HERO_CONTENT } from "../Constants";
import file from "../assets/file.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-5 text-5xl tracking-tight lg:mt-16 lg:text-7xl"
          >
            Rakhi Singh
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tighter text-transparent lg:text-3xl"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-3 max-w-xl py-3 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={file}
            alt="Rakhi Singh"
            className="w-60 h-40 lg:w-80 lg:h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
