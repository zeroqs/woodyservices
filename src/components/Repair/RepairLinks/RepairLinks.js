import React from 'react';
import {Link} from "react-router-dom";

function RepairLinks() {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#fafafa"}} >
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="/">Смартфоны</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="">Планшеты</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="">Ноутбуки и ПК</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="">Игровые приставки</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="">Видеокарты</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="">Мелкобытовую технику</Link></li>
    </ul>
  )
}


export default RepairLinks;