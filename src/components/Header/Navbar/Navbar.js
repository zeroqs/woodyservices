import React from 'react';
import styles from './navbar.module.scss'
import Mobile from "../../Navigation/Mobile/Mobile";
import Desktop from "../../Navigation/Desktop/Desktop";

function Navbar() {
  return (
    <div className={styles.adapt}>
      <Desktop/>
      <Mobile/>
    </div>
  )
}

export default Navbar;