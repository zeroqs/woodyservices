import React from 'react';
import styles from './HeaderText.module.scss'
import ModalComponent from "../../ModalComponent/ModalComponent";

function HeaderText({textHeader, textDesc}) {
  return (
    <div className={styles.HeaderText}>
      <h1>
        {textHeader}
      </h1>
      <p>
        {textDesc}
      </p>
      <ModalComponent/>
    </div>
  )
}

export default HeaderText;
