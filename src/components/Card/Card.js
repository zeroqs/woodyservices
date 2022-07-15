import React from 'react';
import styles from "./card.module.scss";

function Card({header, text, img}) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardContent}>
        <div className={styles.CardIcon}>
          <img src={img} alt=""/>
        </div>
        <div className={styles.CardText}>
          <h1>{header}</h1>
          <span>{text}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;