import React from 'react';
import {Nav} from "rsuite";
import {Link} from 'react-router-dom'

function DropLinks() {
  return (
    <Nav.Menu title="Что ремонтируем">
      <Link to="/services"><Nav.Item>Смартфоны</Nav.Item></Link>
      <Link to="/services"><Nav.Item>Планшеты</Nav.Item></Link>
      <Link to="/services"><Nav.Item>Ноутбуки и ПК</Nav.Item></Link>
      <Link to="/services"><Nav.Item>Игровые приставки</Nav.Item></Link>
      <Link to="/services"><Nav.Item>Видеокарты</Nav.Item></Link>
      <Link to="/services"><Nav.Item>Мелкобытовую технику</Nav.Item></Link>
    </Nav.Menu>
  )
}

export default DropLinks;