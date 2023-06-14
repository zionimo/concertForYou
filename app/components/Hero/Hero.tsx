"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-28">
      <div>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-9xl max-lg:text-7xl max-md:text-5xl pb-3"
        >
          Feel the Rhythm of
        </motion.h1>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-9xl  max-lg:text-7xl max-md:text-5xl pb-14"
        >
          Your Heart&apos;s Music
        </motion.h1>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-xl max-lg:text-lg max-md:text-base w-10/12 mx-auto tracking-wider text-neutral-400"
        >
          The biggest, extraordinary and spread out K-Pop music festival all
          around the world , in cooperation with all the famous k-pop indusry
          agencies in korea and other outstanding talents
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
