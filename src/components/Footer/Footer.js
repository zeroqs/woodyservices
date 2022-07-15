import React from 'react';
import './Footer.scss'
import Logo from "../Header/Logo/Logo";
import SocialFooter from "./SocialFooter/SocialFooter";
import PhoneForm from "./PhoneForm/PhoneForm";
import {MenuFooter,MenuFooterMobile} from "./MenuFooter/MenuFooter";

function Footer() {
  return (
    <div className="Footer">
      <div className="Content">
        <div className="FastFooter">
          <div className="LogoFooter">
            <Logo/>
          </div>
          <div className="LinksFooter">
            <SocialFooter/>
          </div>
          <div className="TextFooter">© 2022 WoodyService</div>
        </div>
        <MenuFooter/>
        <MenuFooterMobile/>
        <div className="PhoneFooter">
          <h1>Остались вопросы?<br/>Мы позвоним :)</h1>
          <PhoneForm/>
          <p style={{padding:'20px 0px'}}>Нажимая на кнопку “отправить”, вы даёте <br/> согласие <a href="#">на обработку персональных данных</a></p>
          <a href="#" style={{color: "#FAFAFA"}}>Политика конфеденциальности</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;