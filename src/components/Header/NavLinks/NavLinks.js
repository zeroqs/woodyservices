import React from 'react';
import {Nav} from "rsuite";
import './navLinks.scss';
import {Link} from 'react-scroll';
import {Link as LinkHome} from 'react-router-dom';
import DropLinks from "./DropLinks/DropLinks";

function NavLinks() {
  return (
    <Nav>
      <Nav.Item><LinkHome to="/">Главная</LinkHome></Nav.Item>
      <DropLinks/>
      <Nav.Item><Link to="Meet" smooth={true} duration={1000}>О нас</Link></Nav.Item>
      <Nav.Item><Link to="Reviews" smooth={true} duration={1000}>Отзывы</Link></Nav.Item>
      <Nav.Item><Link to="Contacts" smooth={true} duration={1000}>Контакты</Link></Nav.Item>
    </Nav>
  )
}




export default NavLinks;

