import React from 'react'
import './MainSidebar.scss'
import IconFrame from '../IconFram'
import logo from './logo.svg';
import icon from './Chat.svg'

const MainSidebar = () => {
  return (
  <div className='mainSideBar'>
    <img src={logo}/>
    <div className='profile'></div>
    <div>
    <IconFrame title="chat" src={icon} alt={'chat icon'}/>
    <IconFrame title="chat" src={icon} alt={'chat icon'}/>
    <IconFrame title="chat" src={icon} alt={'chat icon'}/>
    <IconFrame title="chat" src={icon} alt={'chat icon'}/>
    
    </div>
  </div>
  )
}

export default MainSidebar