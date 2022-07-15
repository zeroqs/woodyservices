import React from 'react';
import styles from './RepairCustomCards.module.scss'
import CardCustom from "./CardCustom/CardCustom";
function RepairCustomCards() {
  return (
    <div className={styles.Content}>
        <CardCustom/>
    </div>
  )
}

export default RepairCustomCards;