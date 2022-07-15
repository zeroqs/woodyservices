import React from 'react';
import location from "./64-location.svg";
import chat from "./49-chat-10.svg";
import call from "./27-call.svg";

function ContactsListImg() {
  return (
    <ul>
      <li><img src={location} alt=""/>г.Сургут ул. И.Киртбая 11, ТЦ "Alfa", 3 этаж</li>
      <li><img src={chat} alt=""/>woodysurgut@yandex.ru</li>
      <li><img src={call} alt=""/>+7 (3462) 59-30-00</li>
    </ul>
  )
}

function ContactsList() {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#fafafa"}}>
      <li >г.Сургут ул. И.Киртбая 11, ТЦ "Alfa", 3 этаж</li>
      <li >woodysurgut@yandex.ru</li>
      <li>+7 (3462) 59-30-00</li>
    </ul>
  )
}

export  {ContactsList,ContactsListImg};