import React from 'react';
import styles from "./desktop.module.scss";
import NavLinks from "../../Header/NavLinks/NavLinks";

function Desktop() {
  return (
      <nav className={styles.Desktop}>
        <NavLinks/>
      </nav>
  )
}

export default Desktop;