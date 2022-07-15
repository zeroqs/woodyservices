import React from 'react';
import styles from './Protect.module.scss'
import Card from "./ProtectCard/ProtectCard";
import SwiperComponentProtect from "../Swiper/SwiperComponentProtect/SwiperComponentProtect";

function Protect({ProtectCards}) {
  let cardProtect = ProtectCards.map((card) => <Card key={card.id} img={card.img} /> )
  return (
    <div className={styles.Protect}>
      <div className={styles.Text}>
        <h1>Защитите гаджет бронеплёнкой, чтобы носить его без чехла</h1>
        <p>Оклеим любое ваше устройство в защитную полиуретановую или текстурную плёнку. Оклеиваем телефоны, планшеты, ноутбуки, часы, наушники, приставки и… даже айкосы!</p>
        <h2>Оставьте заявку и получите скидку 15% на наши <a href='#'>любые</a> услуги</h2>
        <button className={styles.button}>Заказать услугу</button>
      </div>
      <div className={styles.Slider}>
        {cardProtect}
      </div>
      <div className={styles.SliderMob}>
        <SwiperComponentProtect ProtectCards={ProtectCards}/>
      </div>
    </div>
  )
}

export default Protect;