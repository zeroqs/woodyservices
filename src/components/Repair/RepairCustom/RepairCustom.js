import React from 'react';
import styles from './RepairCustom.module.scss';
import RepairCustomCards from "../RepairCustomCards/RepairCustomCards";
import RepairCustomCardsMobile from "../RepairCustomCardsMobile/RepairCustomCardsMobile";

function RepairCustomBlock({RepairCustom}) {
  return (
    <div className={styles.Content}>
      <div className={styles.Text}>
        <h1>Мы предлагаем ремонт от А до я</h1>
        <p>Большой спектр услуг по ремонту и предотвращению поломок у смартфонов</p>
      </div>
      <RepairCustomCards RepairCustomFirst={RepairCustom.FirstPath} RepairCustomSecond={RepairCustom.SecondPath}/>
      <RepairCustomCardsMobile RepairCustomFirst={RepairCustom.FirstPath} RepairCustomSecond={RepairCustom.SecondPath}/>
    </div>
  )
}

export default RepairCustomBlock;