import React from 'react';
import styles from "./mobile.scss";
import {HiMenuAlt2} from 'react-icons/hi'
import {useState} from "react";
import {VscChromeClose} from 'react-icons/vsc'
import {Link} from "react-router-dom";


function Mobile() {



  const [open,setOpen] = useState(false);
  const handleClick = () => {
    document.body.classList.toggle('mob');
  };
  function NavLinksMobile() {
    return (
      <ul >
        <Link onClick={()=> {
          setOpen(!open);
          handleClick();
        }} to="/">Главная</Link>
        <Link onClick={()=> {
          setOpen(!open);
          handleClick();
        }} to="/services">Что ремонтируем</Link>
        <Link onClick={()=> {
          setOpen(!open);
          handleClick();
        }} to="/about">О нас</Link>
        <Link onClick={()=> {
          setOpen(!open);
          handleClick();
        }} to="/reviews">Отзывы</Link>
        <Link  onClick={()=> {
          setOpen(!open);
          handleClick();
        }}to="/contact">Контакты</Link>
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