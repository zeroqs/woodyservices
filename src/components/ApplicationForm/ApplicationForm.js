import React from 'react';
import styles from './ApplicationForm.module.scss'
import img from './Rectangle 9.png'
import Form from "./Form/Form";

function ApplicationForm() {
  return (
    <div className={styles.ApplicationForm}>
      <div className={styles.Content}>
        <div><img src={img} alt=""/></div>
        <div>
          <h1>Не забудьте оставить заявку</h1>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm;