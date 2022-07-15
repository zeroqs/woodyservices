import React from 'react';
import styles from './cardBrand.module.scss'

function CardBrand({img}) {
  return (
    <div className={styles.cardBrand}>
      <img src={img} alt=""/>
    </div>
  )
}

export default CardBrand;