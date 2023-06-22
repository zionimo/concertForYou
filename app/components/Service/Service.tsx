"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface detailData {
  day: string;
  location: string;
  description: string;
}

interface DateData {
  month: string;
  details: detailData[];
}

interface ScheduleData {
  images: string;
  dates: DateData[];
}

const artists = [
  "AESPA",
  "IDLE",
  "IVE",
  "LESSERAFIM",
  "NEWJEANS",
  "STAYC",
  "STRAYKIDS",
  "SEVENTEEN",
];

const Service: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [schedule, setSchedule] = useState<ScheduleData[]>([]);

  useEffect(() => {
    // 비동기 함수
    // fetch 함수로 '/data.json' 데이터를 가져옴
    // await response.json()로 json 형식으로 반환된 데이터를
    // ScheduleData 타입의 배열로 변환하여 변수 data에 할당함
    // setSchedule(data)를 통해 schedule의 상태변수를 업데이트함
    const fetchScheduleData = async () => {
      try {
        const response = await fetch("/data.json");
        const data: ScheduleData[] = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error("에러", error);
      }
    };

    fetchScheduleData();
  }, []); // 빈배열 넣기. 처음 렌더링될 때 한 번만 실행함

  const handleItemClick = (index: number) => {
    setSelected(index);
  };

  // 아티스트 이미지
  const renderImage = () => {
    const images = [
      "artists/aespa.jpg",
      "artists/idle.jpg",
      "artists/ive.jpg",
      "artists/lesserafim.jpeg",
      "artists/newjeans.jpg",
      "artists/stayc.jpg",
      "artists/straykids.jpg",
      "artists/sventeen.jpg",
    ];

    return images.map((image, index) => (
      <img
        className={`w-full h-auto max-h-[600px] object-cover object-top max-md:mb-20 brightness-50 ${
          selected === index ? "" : "hidden"
        } `}
        src={image}
        key={index}
        alt="Image"
      />
    ));
  };

  // 콘서트 정보
  function renderDates() {
    if (!schedule[selected]) return null;
    const dates = schedule[selected].dates;

    return (
      <div className="md:absolute bottom-2 flex items-start justify-around w-full text-neutral-100 max-md:grid grid-cols-2 max-md:gap-6">
        {dates.map((date, index) => (
          <div key={index} className="text-white">
            <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4">
              {date.month}
            </h1>

            <ul className="lg:space-y-4 space-y-2">
              {date.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex flex-row  lg:space-x-5 space-x-2 text-left"
                >
                  <h2 className="lg:text-3xl text-xl">{detail.day}</h2>

                  <div className="max-md:text-sm">
                    <h3>{detail.location}</h3>

                    {detail.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // motion
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }, // staggerChildren: 자식컴포넌트 애니메이션 간의 시차를 줄수 있음
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "keyframe", duration: 0.4 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-32 text-center"
    >
      {/* 스케줄 소개글 */}
      <motion.div variants={item} className="mt-24">
        <h1 className="lg:text-7xl text-4xl mb-6">Schedule</h1>
        <p className="lg:text-2xl text-base text-neutral-400 text-center w-[80%] md:w-[60%] mx-auto">
          Discover the schedule of your favourite idols and support them at an
          incredibly grand concert
        </p>
      </motion.div>

      {/* 아티스트 리스트 */}
      <motion.div variants={item} className="mt-20 mb-6">
        <ul className="grid grid-cols-4 lg:grid-cols-8">
          {Array.from({ length: 8 }, (_, index) => (
            <li
              key={index}
              onClick={() => {
                handleItemClick(index);
              }}
              className={`${
                selected === index
                  ? " text-yellow-200 lg:text-3xl text-2xl"
                  : " text-neutral-500 lg:text-2xl text-xl"
              } w-auto cursor-pointer`}
            >
              {artists[index]}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 아티스트 이미지 & 콘서트 정보 */}
      <motion.div variants={item}>
        <div className="relative md:bg-gradient-to-tl from-black to-white z-10">
          {renderImage()}
          {renderDates()}
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-16">
        <button className="border-2 px-5 py-2 hover:bg-white hover:text-black ease-in duration-200">
          See More
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Service;
