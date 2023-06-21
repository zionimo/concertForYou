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

const Service = () => {
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
        className={`w-full h-auto max-h-[600px] object-cover object-top max-md:mb-20  brightness-50 ${
          selected === index ? "" : "hidden"
        } `}
        src={image}
        key={index}
        alt="Image"
      />
    ));
  };

  const renderDates = () => {
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
  };

  return (
    <div className="mt-32 text-center">
      <hr />
      <div className="mt-24">
        <h1 className="lg:text-7xl text-4xl mb-6">Schedule</h1>
        <p className="lg:text-2xl text-base text-neutral-400">
          Discover the schedule of your favourite idols and support them at an
          incredibly grand concert
        </p>
      </div>

      <div className="mt-20 ">
        <ul className="flex flex-row flex-wrap justify-between">
          {Array.from({ length: 8 }, (_, index) => (
            <li
              key={index}
              onClick={() => {
                handleItemClick(index);
              }}
              className={`${
                selected === index
                  ? " text-yellow-200 lg:text-3xl text-xl"
                  : " text-neutral-500 lg:text-2xl text-base"
              } w-auto cursor-pointer`}
            >
              {artists[index]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="relative md:bg-gradient-to-tl from-black to-white z-10">
          {renderImage()}
          {renderDates()}
        </div>
      </div>

      <div className="mt-32 ">
        <button className="border-2 px-5 py-2 hover:bg-white hover:text-black ease-in duration-200">
          See More
        </button>
      </div>
    </div>
  );
};

export default Service;
