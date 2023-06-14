"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }, // staggerChildren: 자식컴포넌트 애니메이션 간의 시차를 줄수 있음
  };

  const context = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "smooth" } },
  };

  return (
    <div className="pt-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
      >
        <motion.h1
          variants={context}
          className="text-center text-9xl max-lg:text-7xl max-md:text-5xl pb-3"
        >
          Feel the Rhythm of
        </motion.h1>
        <motion.h1
          variants={context}
          className="text-center text-9xl  max-lg:text-7xl max-md:text-5xl pb-14"
        >
          Your Heart&apos;s Music
        </motion.h1>

        <motion.p
          variants={context}
          className="text-center text-xl max-lg:text-lg max-md:text-base w-10/12 mx-auto tracking-wider text-neutral-400"
        >
          The biggest, extraordinary and spread out K-Pop music festival all
          around the world , in cooperation with all the famous k-pop indusry
          agencies in korea and other outstanding talents
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
