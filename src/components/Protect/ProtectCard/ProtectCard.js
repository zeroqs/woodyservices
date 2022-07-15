import React from 'react';
import styles from './ProtectCard.module.scss'

function Card({img}) {
  return (
    <div className={styles.Card}>
      <img src={img} alt=""/>
    </div>
  )
}

export default Card;