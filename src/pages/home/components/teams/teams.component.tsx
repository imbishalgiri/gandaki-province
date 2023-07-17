import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./teams.styles.scss";
import UserCard from "../../../../components/user-card/userCard.component";
import { Navigation } from "swiper/modules";
import { Pagination } from "@mui/material";

const Teams: React.FC = (): JSX.Element => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
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
  );
};

export default Teams;
