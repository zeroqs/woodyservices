import React from 'react';
import styles from "../HeaderImages.module.scss";
import photo from "../third.png";
import Count from "../../Counter/Count";

function SecondImage({Counter}) {

  return (
    <div className={styles.secondImage}>
        <Count Counter={Counter}/>
        <div className={styles.fourthImage}>
          <img src={photo} alt=""/>
        </div>
      </div>
      )
      }

      export default SecondImage;