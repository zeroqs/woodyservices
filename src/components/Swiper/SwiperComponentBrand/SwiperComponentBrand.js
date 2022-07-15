import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";
import CardBrand from "../../Brand/CardBrand/CardBrand";

export default function SwiperComponentBrand({Brands}) {
  let cardlement = Brands.map((card) => <SwiperSlide><CardBrand key={card.id} img={card.img}/></SwiperSlide>)
  let screenWidth = window.screen.availWidth;


  return (
    <div style={{ height: '20rem' }}>
      <Swiper
        slidesPerView={screenWidth < 630 ? 1 : 3}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {cardlement}
      </Swiper>
    </div>
  );
}
