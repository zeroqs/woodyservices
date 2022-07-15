import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/pagination'
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import Card from "../../Protect/ProtectCard/ProtectCard";


function SwiperComponentProtect({ProtectCards}) {
  let SwiperElement = ProtectCards.map((card) => <SwiperSlide><Card key={card.id} img={card.img}/></SwiperSlide>)

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{delay : 3000}} // 3с
    >
      {SwiperElement}
    </Swiper>
  )
}

export default SwiperComponentProtect;