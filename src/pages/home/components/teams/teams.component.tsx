import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import UserCard from "../../../../components/user-card/userCard.component";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./teams.styles.scss";

const Teams: React.FC = (): JSX.Element => {
  return (
    <div className="container teams_wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500 }}
      >
        <SwiperSlide>
          <UserCard />
        </SwiperSlide>
        <SwiperSlide>
          <UserCard />
        </SwiperSlide>
        <SwiperSlide>
          <UserCard />
        </SwiperSlide>
        <SwiperSlide>
          <UserCard />
        </SwiperSlide>
        <SwiperSlide>
          <UserCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Teams;
