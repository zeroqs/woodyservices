import React from 'react';
import styles from './TeamCard.module.scss'

function TeamCard({post,name,img}) {
  return (
    <div className={styles.CardTeam}>
      <div className={styles.CardTeamImage}>
        <img src={img} alt=""/>
      </div>
      <div className={styles.CardTeamText}>
        <div className={styles.CardTeamTextContent}>
          <h1>{name}</h1>
          <p>{post}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamCard;