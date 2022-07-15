import React from 'react';
import styles from './Contacts.module.scss'

import Social from "../Social/Social";
import {ContactsListImg} from "./ContactsList";

function Contacts() {
  return (
    <div className={styles.Contacts}>
      <h1>Наши контакты</h1>
      <div className={styles.ContactsContent}>
        <div className={styles.ContactsMap}><iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb1481ca9f80a50e726433434ba57e8af2a98a3105e25cba20aeb155c231a0c6&amp;source=constructor"
          width="600" height="450" frameBorder="0"></iframe></div>
        <div className={styles.ContactsList}>
          <h2>Свяжитесь с нами</h2>
          <ContactsListImg/>
          <div>
            <h2>Подписывайтесь на нас</h2>
            <Social/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;