import React from 'react';
import styles from './Navigation.module.scss'
import Navbar from "../Header/Navbar/Navbar";
import Logo from "../Header/Logo/Logo";
import Social from "../Social/Social";

function Navigation() {
  return (
    <div className={styles.container}>
      <nav className={styles.Nav}>
        <Logo/>
        <Navbar/>
        <a href="tel:+73462593000">+7 3462 593-000</a>
        <div className={styles.Social}>
          <Social/>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;