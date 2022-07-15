import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import './swiperComponent.scss'

// Import Swiper styles
import 'swiper/css';
import Card from "../Card/Card";

function SwiperComponent({CardInfo}) {
  let SwiperElement = CardInfo.map((card) => <SwiperSlide><Card key={card.id} header={card.header} text={card.text} img={card.img}/></SwiperSlide>)

  return (
      <Swiper className="abc"
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{delay : 3000}} // 3с
      >
        {SwiperElement}
      </Swiper>
  )
}

export default SwiperComponent;