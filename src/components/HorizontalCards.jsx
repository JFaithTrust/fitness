import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Keyboard, Autoplay } from "swiper/modules";

import { ExerciseCard, BodyPart } from "../components";

const HorizontalCards = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  console.log(data);
  return (
    <div style={{ width: "1280px", margin: "auto" }}>
      <Swiper
        keyboard={{ enabled: true }}
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        modules={[Pagination, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id || item} m={"0 40px"}>
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalCards;
