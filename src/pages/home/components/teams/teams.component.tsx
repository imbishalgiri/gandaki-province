import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./teams.styles.scss";
import UserCard from "../../../../components/user-card/userCard.component";

const Teams: React.FC = (): JSX.Element => {
  const slides = [];

  for (let i = 0; i < 12; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
        <UserCard />
      </SwiperSlide>
    );
  }

  console.log("slides", slides);

  return (
    <Swiper
      id="swiper"
      virtual
      slidesPerView={3}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={30}
      // slidesPerGroup={2}
      // autoplay
      // loop
      onReachEnd={() => {
        const tmp = slides.unshift();
        slides.push(tmp);
      }}
      navigation
      pagination
    >
      {slides}
    </Swiper>
  );
};

export default Teams;
