import React from 'react';
import img from "../Mask group.svg";
import styles from './CardCustom.module.scss'

function CardCustom() {
  return (
    <div className={styles.Card}>
      <div className={styles.CardContent}>
        <div className={styles.CardImg}>
          <img src={img} alt=""/>
        </div>
        <div>
          <h1>Замена дисплея</h1>
        </div>
      </div>
    </div>
  )
}

export default CardCustom;