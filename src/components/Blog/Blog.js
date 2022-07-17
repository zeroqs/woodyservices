import React from 'react';
import styles from './Blog.module.scss';
import img from './Rectangle 109.png'
import BlogCard from "./BlogCart/BlogCart";
function Blog() {
  return (
    <div className={styles.Content}>
      <div className={styles.Header}>
        <h1>Наш Полезный блог</h1>
        <p>Мы с радостью поделимся с Вами лайфхаками, советам и новостями на страницах коротких статей. Никаких занудных и сухих фактов! Мы пишем понятным языком с капелькой юмора :)</p>
      </div>
      <div className={styles.Cards}>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
      <div className={styles.Buttons}>
        <button className={styles.BtnInherit}>Показать все</button>
        <button className={styles.BtnDef}>Показать все</button>
      </div>
    </div>
  )
}

export default Blog;