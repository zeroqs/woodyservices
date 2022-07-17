import React from 'react';
import  "./mobile.scss";
import {HiMenuAlt2} from 'react-icons/hi'
import {useState} from "react";
import {VscChromeClose} from 'react-icons/vsc'
import {Link as LinkHome} from 'react-router-dom';
import {Link} from 'react-scroll';

import {Nav, Panel, PanelGroup} from 'rsuite';


function Mobile() {



  const [open,setOpen] = useState(false);
  const handleClick = () => {
    document.body.classList.toggle('mob');
  };
  function NavLinksMobile() {
    return (
      <ul className="NavBar">
        <LinkHome onClick={()=> {
          setOpen(!open);
          handleClick();
        }} to="/">Главная</LinkHome>
          <PanelGroup accordion >
            <Panel header="Что ремонтируем">
              <ul className="DropDownList">
                <li onClick={()=> {
                  setOpen(!open);
                  handleClick();
                }}><LinkHome to="/services">Смартфоны</LinkHome></li>
                <li onClick={()=> {
                  setOpen(!open);
                  handleClick();
                }}><LinkHome to="/services">Планшеты</LinkHome></li>
                <li onClick={()=> {
                  setOpen(!open);
                  handleClick();
                }}><LinkHome to="/services">Ноутбуки и ПК</LinkHome></li>
                <li onClick={()=> {
                  setOpen(!open);
                  handleClick();
                }}><LinkHome to="/services">Игровые приставки</LinkHome></li>
                <li onClick={()=> {
                  setOpen(!open);
                  handleClick();
                }}><LinkHome to="/services">Видеокарты</LinkHome></li>
                <li onClick={()=> {
                  setOpen(!open);
                  handleClick();
                }}><LinkHome to="/services">Мелкобытовую технику</LinkHome></li>
              </ul>
            </Panel>
          </PanelGroup>
        <Link onClick={()=> {
          setOpen(!open);
          handleClick();
        }} to="Meet" smooth={true} duration={1000}>О нас</Link>
        <Link onClick={()=> {
          setOpen(!open);
          handleClick();
        }} to="Reviews" smooth={true} duration={1000}>Отзывы</Link>
        <Link  onClick={()=> {
          setOpen(!open);
          handleClick();
        }}to="Contacts" smooth={true} duration={1000}>Контакты</Link>
      </ul>
    )
  }

  const hamburgerIcon = <HiMenuAlt2 className={`Hamburger`}
                                    size='50px'
                                    color='#E41F7B'
                                    onClick={()=> {
                                      setOpen(!open);
                                      handleClick();
                                    }}
  />

  const hamburgerClose = <VscChromeClose className={`Hamburger`}
                                     size='50px'
                                     color='#E41F7B'
                                     onClick={()=> {
                                       setOpen(!open);
                                       handleClick();
                                     }}
  />

  return (
    <nav className={`Mobile Active`} >
      {open ? hamburgerClose : hamburgerIcon}
      {open && <NavLinksMobile/> }
    </nav>
  )
}

export default Mobile;