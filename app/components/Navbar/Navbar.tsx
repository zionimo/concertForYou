"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const container = {
    visible: { opacity: 1, y:0 },
    hidden: { opacity: 0, y:30},
  };

  return (
    <div>
      <div className="pt-5">
        <div className="flex flex-row items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }} // 처음 랜딩시에만 애니메이션 실행 (이후 스크롤 등 이벤트에 트리거되지 않음)
          >
            <Image
              priority={true} // 랜딩시우선적으로 로드됨
              src="/logo1.png"
              width={196}
              height={20}
              alt="Logo"
            />
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            variants={container}
            className="flex flex-row items-center lg:space-x-10 space-x-6 max-md:hidden"
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Performance</a>
            </li>
            <li>
              <a href="">Booking</a>
            </li>
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
          </motion.ul>

          <motion.div 
           initial="hidden"
           whileInView="visible"
           transition={{ duration: 0.8, delay: 0.1 }}
           viewport={{ once: true }}
           variants={container}
          className="cursor-pointer">
            <button className="lg:px-7 py-1.5 px-5 bg-white text-black">
              Sign In
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;