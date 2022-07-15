import styles from './header.module.scss';
import Navigation from "../Navigation/Navigation";
import React from "react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import {Route, Routes} from "react-router-dom";



function Header({Counter, textHeader}) {
  return (
    <header className={styles.header}>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HeaderInfo Counter={Counter} textHeader={textHeader.MainPage.textHeader} textDesc={textHeader.MainPage.textDesc}/>} />
        <Route path="/services" element={<HeaderInfo isServices={true} Counter={Counter} textHeader={textHeader.Services.textHeader} textDesc={textHeader.Services.textDesc}/>} />}/>
      </Routes>
    </header>
  );
}

export default Header;
