"use client";

import { motion } from "framer-motion";

const Card = () => {
  // motion
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }, // staggerChildren: 자식컴포넌트 애니메이션 간의 시차를 줄수 있음
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "keyframe", duration: 0.4 } },
  };

  const item1 = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 0.25,
      x: 0,
      transition: { type: "keyframe", duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="mt-32 mb-32"
    >
      <div className="relative">
        <motion.img
          variants={item1}
          className="opacity-25 w-full h-auto max-h-[500px] object-cover"
          src="concert.png"
          alt="concert"
        />
        <motion.div
          variants={item}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col w-full items-center"
        >
          <h1 className="uppercase md:text-4xl text-2xl">
            Get Tour Tickets Now
          </h1>
          <p className="md:mt-2 md:text-xl text-base">
            Get a 40% discount on first purchase
          </p>
          <div className="md:mt-10 mt-4">
            <button className="border-2 md:px-5 px-3 md:py-2 py-1 max-md:text-sm hover:bg-white hover:text-black ease-in duration-200">
              See More
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
