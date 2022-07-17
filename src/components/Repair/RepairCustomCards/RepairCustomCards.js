import React from 'react';
import styles from './RepairCustomCards.module.scss'
import CardCustom from "./CardCustom/CardCustom";
function RepairCustomCards({RepairCustomFirst,RepairCustomSecond}) {
  let cardItem = RepairCustomFirst.map((card) => <CardCustom key={card.id} img={card.img} text={card.text} /> )
  let cardItemSecond = RepairCustomSecond.map((card) => <CardCustom key={card.id} img={card.img} text={card.text} /> )
  return (
    <div className={styles.Content}>
      {cardItem}
      {cardItemSecond}
    </div>

  )
}

export default RepairCustomCards;