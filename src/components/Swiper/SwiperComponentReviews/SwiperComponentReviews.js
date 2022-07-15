import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/pagination'
// Import Swiper styles
import 'swiper/css';

import ReviewCard from "../../Reviews/ReviewCard/ReviewCard";

function SwiperComponentReviews({Review}) {

  let SwiperElement = Review.map((card) => <SwiperSlide><ReviewCard key={card.id} img={card.img} name={card.name} post={card.post}/></SwiperSlide>)

  return (
    <Swiper
      spaceBetween={50}
      modules={[Autoplay,Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{delay : 3000}} // 3с
    >
      {SwiperElement}
    </Swiper>
  )
}

export default SwiperComponentReviews;