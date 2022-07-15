import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/pagination'
import './SwiperComponentTeam.module.scss'
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';

import TeamCard from "../../Team/TeamCard/TeamCard";

function SwiperComponentTeam({Team}) {
  let SwiperElement = Team.map((card) => <SwiperSlide><TeamCard key={card.id} img={card.img} name={card.name} post={card.post}/></SwiperSlide>)

  return (
    <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{delay : 3000}} // 3с
            navigation
    >
      {SwiperElement}
    </Swiper>
  )
}

export default SwiperComponentTeam;