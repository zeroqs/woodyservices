import React from 'react';
import styles from "./Repair.module.scss";
import CardRepair from "../CardRepair/CardRepair";

function Repair({ RepairInfo }) {
  let cardRepair = RepairInfo.map((data) => <CardRepair key={data.id} header={data.header} text={data.text} img={data.img}/>)
  return (
    <div className={styles.CardRepairs}>
      <div className={styles.CardsHeader}>
        <h1>Ремонтируем всё — от Патифона до Айфона</h1>
        <p>Мы за 8 лет научились ремонтировать 90% всех возможных поломок у 90% видов техники </p>
      </div>
      <div className={styles.CardsMain}>
        {cardRepair}
      </div>
    </div>
  )
}

export default Repair;