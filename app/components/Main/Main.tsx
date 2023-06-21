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
          className="text-center text-xl max-lg:text-lg max-md:text-base w-10/12 mx-auto text-neutral-400"
        >
          The biggest, extraordinary and spread out K-Pop music festival all
          around the world, in cooperation with all the famous k-pop indusry
          agencies in korea and other outstanding talents
        </motion.p>
      </motion.div>

      <div className="mt-28 text-white">
        <div className="p-2 relative">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className=" w-full lg:h-[700px] md:h-[500px] h-[300px] object-cover object-top brightness-75"
            src="artists/idle.jpg"
            alt="Idle"
          />

          <motion.div
            variants={container}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delayChildren: 0.1 }}
          >
            <motion.span
              variants={image}
              className="absolute top-8 left-8 lg:text-7xl text-5xl"
            >
              (G)I-DLE
            </motion.span>

            <motion.span
              variants={image}
              className="absolute top-8 right-8 md:text-2xl text-base"
            >
              Go and Buy the tickets
            </motion.span>

            <div className="absolute bottom-8 right-8 flex flex-col items-end ">
              <motion.span
                variants={image}
                className="mb-2 lg:text-5xl md:text-3xl text-base"
              >
                Seoul, December 12
              </motion.span>
              <motion.span variants={image} className=" lg:text-xl text-sm ">
                (G)I-DLE is a South Korean girl group formed by SM
                Entertainment.
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
