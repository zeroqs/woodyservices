import React from 'react';
import HeaderText from "./HeaderText/HeaderText";
import HeaderImages from "./HeaderImages/HeaderImages";
import styles from './headerInfo.module.scss'
import SecondImage from "./HeaderImages/SecondImages/SecondImages";



function HeaderInfo({textHeader, textDesc, isServices,Counter}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.headerPost}>
        <HeaderText textHeader={textHeader} textDesc={textDesc} />
        <div className={styles.HeaderImages}>
          <HeaderImages Counter={Counter}/>
          {isServices ? <></> :  <SecondImage Counter={Counter}/>}
        </div>
      </div>
    </div>
  )
}

export default HeaderInfo;