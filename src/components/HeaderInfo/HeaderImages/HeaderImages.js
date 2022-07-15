import React from 'react';
import styles from './HeaderImages.module.scss'
import photo2 from './first.png'
import Count from "../Counter/Count";

function HeaderImages({Counter}) {
  return (
    <div>
      <div className={styles.firstImage}>
        <div className={styles.upper}>
          <Count Counter={Counter}/>
        </div>
        <div className={styles.down}>
          <img src={photo2} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default HeaderImages;