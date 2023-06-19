"use client";

import { motion } from "framer-motion";

const Section = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const context = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "smooth" } },
  };

  const image = {
    hidden: { opacity: 0, y: 30, scale: 1.2 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "keyframe", duration: 0.4 },
    },
  };

  return (
    <div className="mt-40">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
        className="md:grid grid-cols-2 gap-x-7 space-y-10"
      >
        {/* 방탄소년단 */}
        <motion.img
          whileInView="show"
          variants={image}
          src="artists/bts.jpg"
          alt="BTS"
        />
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-800 flex items-center font-extrabold"></div>

        <motion.div variants={context}>
          <h1 className="text-4xl mt-4 mb-4 max-sm:text-3xl">BTS</h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            BIGHIT MUSIC Entertainment
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            BTS is a South Korean boy band formed in 2010. The band consists of
            Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook.
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show more
          </button>
        </motion.div>

        {/* 블랙핑크 */}
        <motion.img
          variants={image}
          className="md:mt-[40px]"
          src="artists/blackpink.jpg"
          alt="BlackPink"
        />
        <div className="text-4xl md:text-7xl text-neutral-800 flex items-center mb-20 font-extrabold"></div>
        <motion.div variants={context}>
          <h1 className="text-4xl mb-4 max-sm:text-3xl">BLACK PINK</h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            YG Entertainment
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            is a South Korean girl group formed in 2016, consisting of members
            Jisoo, Jennie, Rosé, and Lisa.
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show more
          </button>
        </motion.div>

        {/* 트와이스 */}
        <motion.img
          variants={image}
          className="md:mt-[-100px] opacity-80"
          src="artists/twice.jpg"
          alt=""
        />
        <div className="max-md:hidden text-4xl md:text-7xl text-neutral-800 flex items-center justify-center font-extrabold"></div>
        <motion.div variants={context}>
          <h1 className=" text-4xl mt-4 mb-4 max-sm:text-3xl">TWICE</h1>
          <p className="text-2xl text-neutral-500 max-sm:text-xl">
            JYP Entertainment
          </p>
          <p className="text-neutral-500 mt-3 max-sm:text-sm">
            is a South Korean girl group formed in 2015. consisting of members
            Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and
            Tzuyu.
          </p>
          <button className="px-5 py-2 border-2 mt-5 border-white hover:bg-white hover:text-black transition-all ease-in duration-200">
            Show more
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section;
