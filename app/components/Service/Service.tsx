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
  }, []); // 빈배열 넣기. 처음 렌더링될 때 한 번만 실행함

  const handleItemClick = (index: number) => {
    setSelected(index);
  };
  const renderImage = () => {
    const images = [
      "aritst/aespa.jpg",
      "aritst/idle.jpg",
      "aritst/ive.jpg",
      "aritst/lesserafim.jpg",
      "aritst/newjeans.jpg",
      "aritst/stayc.jpg",
      "aritst/straykids.jpg",
      "aritst/sventeen.jpg",
    ];

    return images.map((image, index) => (
      <img
        className={`${selected ? "" : "hidden"} `}
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
      <div>
        {dates.map((date, index) => (
          <div key={index}>
            <h1>{date.month}</h1>
            <ul>
              {date.details.map((detail, index) => (
                <li key={index}>
                  <h2>{detail.day}</h2>
                  <div>
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
      <div>
        <h1 className="lg:text-7xl text-4xl mb-6">Schedule</h1>
        <p className="lg:text-2xl text-base text-neutral-400">
          Discover the schedule of your favourite idols and support them at an
          incredibly grand concert
        </p>
      </div>

      <div className="mt-24 ">
        <ul className="flex flex-wrap justify-evenly ">
          {Array.from({ length: 8 }, (_, index) => (
            <li
              onClick={() => {
                handleItemClick(index);
              }}
              className={`${
                selected === index
                  ? " text-yellow-200 lg:text-3xl text-xl"
                  : " text-neutral-500 lg:text-2xl text-base"
              } tracking-wider `}
            >
              {artists[index]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
