import React from 'react';
import {Link} from "react-router-dom";

function RepairLinks() {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#fafafa"}} >
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="/services">Смартфоны</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="/services">Планшеты</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="/services">Ноутбуки и ПК</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="/services">Игровые приставки</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="/services">Видеокарты</Link></li>
      <li style={{ padding: "10px 10px 10px 0px"}}><Link to="/services">Мелкобытовую технику</Link></li>
    </ul>
  )
}


export default RepairLinks;