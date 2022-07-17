import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../../pages/MainPage/Main";
import Services from "../../../pages/ServicesPage/Services";

// Роуты для подгрузки основного контента (т.е Без header,HeaderInfo, cardsHeader )
// Роуты для (header,HeaderInfo, cardsHeader) в Header/Header.js

function Routers({Models,CardInfo,RepairInfo,CareInfo,Team,Review,ProtectCards,Brands,RepairCustom}) {
  return (
    <Routes>
      <Route path="/" element={<Main Brands={Brands} ProtectCards={ProtectCards} Review={Review} Team={Team} CareInfo={CareInfo} RepairInfo={RepairInfo} CardInfo={CardInfo}/>} />
      <Route path="/services" element={<Services Models={Models} RepairCustom={RepairCustom} Brands={Brands} ProtectCards={ProtectCards} Review={Review} Team={Team} CareInfo={CareInfo} RepairInfo={RepairInfo} CardInfo={CardInfo}/>}/>} />
    </Routes>
  )
}

export default Routers;