import React from 'react';
import {Link} from 'react-scroll';
import {Link as LinkHome} from "react-router-dom";

function NavLinksFooter() {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#fafafa"}}>
      <li style={{ padding: "10px 10px 10px 0px"}}><LinkHome to="/">Главная</LinkHome></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="Meet" smooth={true} duration={1000}>О нас</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="Reviews" smooth={true} duration={1000}>Отзывы</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="Contacts" smooth={true} duration={1000}>Контакты</Link></li>
    </ul>
  )
}

export default NavLinksFooter;