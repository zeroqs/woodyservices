import React from 'react';
import styles from "./BlogCart.module.scss";
import img from "../Rectangle 109.png";

function BlogCard() {
  return (
    <div className={styles.Card}>
      <img className={styles.img} src={img} alt=""/>
      <div className={styles.Text}>
        <div className={styles.textHeader}>
          <h1>Название статьи</h1>
          <span>Описание....</span>
        </div>
        <div className={styles.texBtn}><button>Читать</button></div>
      </div>
    </div>
  )
}

export default BlogCard;