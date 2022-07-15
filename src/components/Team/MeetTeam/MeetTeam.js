import React from 'react';
import styles from "./MeetTeam.module.scss";
import MeetTeamContent from "../Team";
import SwiperComponentTeam from "../../Swiper/SwiperComponentTeam/SwiperComponentTeam";

function MeetTeam({Team}) {
  return (
    <div className="MeetTeam Pink">
      <div className={styles.MeetTeam}>
        <MeetTeamContent Team={Team}/>
      </div>
      <div className={styles.TeamMobile}>
        <SwiperComponentTeam Team={Team}/>
      </div>
    </div>
  )
}

export default MeetTeam;