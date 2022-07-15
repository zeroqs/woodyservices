import React from 'react';
import styles from "./cardRepair.module.scss";
import {Link} from "react-router-dom";

function CardRepair({header, text, img}) {


  
  return (
    <div className={styles.CardRepair}>
      <div className={styles.CardRepairContent}>
        <h1>{header}</h1>
        <div className={styles.CardRepairContainer}>
          <img src={img} alt=""/>
          <div className={styles.CardRepairText}>
            <p>{text}</p>
            <Link to="/services"><button><span>Подробней</span></button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRepair;