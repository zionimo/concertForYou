"use client";

import { motion } from "framer-motion";

const Main = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }, // staggerChildren: 자식컴포넌트 애니메이션 간의 시차를 줄수 있음
  };

  const context = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "smooth" } },
  };

  const image = {
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

      <div className="mt-28 text-white">
        <div className="p-2 relative">
          <motion.img
            className="w-full lg:h-[700px] h-[500px] object-cover object-top opacity-100"
            src="/aespa-home.webp"
            alt="Aespa"
          />

          <motion.div>
            <motion.span className="absolute top-8 left-8 lg:text-7xl text-4xl">
              Aespa
            </motion.span>
            <motion.span
              variants={image}
              className="absolute bottom-8 left-8 lg:text-xl md:text-base text-sm max-sm:hidden"
            >
              Aespa is a South Korean girl group formed by SM Entertainment.{" "}
            </motion.span>
            <motion.span
              variants={image}
              className="absolute top-8 right-8 md:text-xl text-sm"
            >
              Go and Buy the tickets
            </motion.span>
            <motion.span
              variants={image}
              className="absolute right-8 bottom-8 md:text-3xl text-sm"
            >
              Seoul, December 12
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
