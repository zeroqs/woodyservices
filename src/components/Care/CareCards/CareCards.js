import React from 'react';
import styles from "./CareCards.module.scss";

function CareCards({header,text,img}) {
  return (
      <div className={styles.CareCard}>
        <div className={styles.CardContent}>
          <img src={img} alt=""/>
          <h1>{header}</h1>
          <span>{text}</span>
        </div>
      </div>
  )
}

export default CareCards;