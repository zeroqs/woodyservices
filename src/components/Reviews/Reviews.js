import React from 'react';
import styles from './Reviews.module.scss';
import SwiperComponentReviews from "../Swiper/SwiperComponentReviews/SwiperComponentReviews";
import up from './up.png'
import down from './down.png'

function Reviews({Review}) {

  return (
    <div className="Swiper Reviews">
      <div className={styles.Reviews}>
        <div className={styles.ReviewsContent}>
          <h1>Мы дорожим своей Репутацией</h1>
          <div className={styles.ReviewsSlider}>
            <div className={styles.Up}>
              <img src={up} alt=""/>
            </div>
            <SwiperComponentReviews Review={Review}/>
            <div className={styles.Down}>
              <img src={down} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Reviews;