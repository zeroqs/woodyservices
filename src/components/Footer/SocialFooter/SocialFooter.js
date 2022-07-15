import React from 'react';
import styles from './socialFooter.module.scss'
import Vk from './icons/vk.svg'
import Telegram from './icons/Telegram.svg'
import WhatsApp from './icons/whatsApp.svg'
import Inst from './icons/Inst.svg'

function SocialFooter() {
  return (
    <div className={styles.social}>
      <img className='SocialIcon Vk' src={Vk} alt="Vk"/>
      <img className='SocialIcon Telegram' src={Telegram} alt="Telegram"/>
      <img className='SocialIcon WhatsApp' src={WhatsApp} alt="WhatsApp"/>
      <img className='SocialIcon Instagram' src={Inst} alt="Instagram"/>
    </div>
  )
}

export default SocialFooter;