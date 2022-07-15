import React from 'react';
import styles from './Team.module.scss'
import TeamCard from "./TeamCard/TeamCard";

function Team({Team}) {
  let cardTeam = Team.map((data) => <TeamCard key={data.id} img={data.img} name={data.name} post={data.post}/>)
  return (
    <div className={styles.Team}>
      <div className={styles.TeamHeader}>
        <h1>Знакомьтесь с нашей командой</h1>
        <p>У нас работают люди с большим опытом в сфере ремонта электроники. Они не понаслышке знают, что такое кнопочные телефоны и древние деревянные компьютеры. Суммарный опыт их работы 50 лет!</p>
      </div>
      <div className={styles.TeamCards}>
        {cardTeam}
      </div>
    </div>
  )
}

export default Team;