import React from 'react';
import styles from './FormRepair.module.scss';
import img from './Фото заглушка.png';
import Form from "./Form/Form";
function FormRepair({Models}) {
  return (
    <div className={styles.Bg}>
      <div className={styles.Form}>
        <div className={styles.Content}>
          <div><h1>Заказать ремонт у нас - просто и быстро</h1></div>
          <div className={styles.FormContent}>
            <div><img src={img} alt=""/></div>
            <div className={styles.FormikContent}>
              <h2>Заполните форму и мы свяжемся с Вами</h2>
              <Form Models={Models}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormRepair;