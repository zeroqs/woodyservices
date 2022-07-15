import React from 'react';
import styles from "./RepairCards.module.scss";
import SwiperComponent from "../../Swiper/SwiperComponent";
import Card from "../../Card/Card";

function RepairCards({CardInfo}) {
  let cardElement = CardInfo.map((data) => <Card key={data.id} header={data.header} text={data.text} img={data.img}/>)

  return (
    <div className={styles.Repair}>
      <div className={styles.Cards}>
        {cardElement}
      </div>
      <div className={styles.CardsMobile}>
        <SwiperComponent CardInfo={CardInfo}/>
      </div>
    </div>
  )
}

export default RepairCards;