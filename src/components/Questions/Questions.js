import React from 'react';
import styles from './Questions.module.scss'
import Accordion from "../Accordion/Accordion";


function Questions() {
  return (
    <div className={styles.Questions}>
      <h1>Отвечаем на ваши вопросы</h1>
      <Accordion/>
    </div>
  )
}

export default Questions;