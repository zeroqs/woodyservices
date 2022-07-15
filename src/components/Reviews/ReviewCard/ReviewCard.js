import React from 'react';
import styles from './ReviewCard.module.scss'

function ReviewCard({img, post, name}) {
  return (
    <div className={styles.ReviewCard}>
      <div className={styles.ReviewCardContent}>
        <div className={styles.ContentHeader}>
          <div><img src={img} alt=""/></div>
          <div><h1>{name}</h1></div>
        </div>
        <div className={styles.ContentText}>
          <span>{post}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;