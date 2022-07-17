import React from 'react';
import styles from './CardCustom.module.scss'

function CardCustom({img,text}) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardContent}>
        <div className={styles.CardImg}>
          <img src={img} alt=""/>
        </div>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default CardCustom;