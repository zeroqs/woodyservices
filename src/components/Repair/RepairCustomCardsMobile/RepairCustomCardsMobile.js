import React from 'react';
import styles from './RepairCustomCardsMobile.module.scss'
import CardCustom from "../RepairCustomCards/CardCustom/CardCustom";
import {Autoplay, Grid, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


function RepairCustomCardsMobile({RepairCustomFirst,RepairCustomSecond}) {
  let cardItem = RepairCustomFirst.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
  let cardItemTwo = RepairCustomSecond.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
  return (
    <div className={styles.Content}>
      <Swiper className="abc"
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{delay : 3000}} // 3с
      >
        <SwiperSlide className={styles.ContentCards}  >{cardItem}</SwiperSlide>
        <SwiperSlide className={styles.ContentCards}  >{cardItemTwo}</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default RepairCustomCardsMobile;