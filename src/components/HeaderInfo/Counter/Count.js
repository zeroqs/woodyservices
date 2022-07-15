import React from 'react';
import styles from "../HeaderImages/HeaderImages.module.scss";

function Count({Counter}) {
  return (
    <div className={styles.thirdImage}>
      <div className={styles.counter}>
        <p>Мы отремонтировали</p>
        <h1>>{Counter} <span>устройств</span></h1>
      </div>
    </div>
  )
}

export default Count;