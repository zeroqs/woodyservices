import React from 'react';
import styles from './Brand.module.scss'
import SwiperComponentBrand from "../Swiper/SwiperComponentBrand/SwiperComponentBrand";

function Brand({Brands}) {
  return (
    <div className={styles.Brand}>
      <div className="Branded">
        <div className={styles.Content}>
          <div className={styles.Header}>
            <h1>Любой бренд нам по силам</h1>
            <p>Мы имеем большой опыт работы с техникой от различных брендов, поэтому можете быть уверены в быстром и качественном ремонте. В списке ниже представлена лишь часть брендов</p>
          </div>
          <div className={styles.Carousel}>
            <div className={styles.CarouselContent}>
              <SwiperComponentBrand Brands={Brands}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Brand;