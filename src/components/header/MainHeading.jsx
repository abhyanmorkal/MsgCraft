import React from 'react'
import "./MainHeading.scss"
import plan from "./assets/Ticket.svg"
import notification from "./assets/Notification.svg"
import hamburg from "./assets/hambur.svg"

const MainHeading = () => {
  const brandName="Abhyan"
  return (
    <div className='mainHeading'>
      <div className="brandName">{`Hola! ${brandName}`}</div>
        <div className="hamburg"><img src={hamburg} alt="button" /></div>
      <div className="leftMenu">
        <div className="currentPlan">
          <p>Current Plan</p>
          <img src={plan} alt="plan icon" />
        </div>
        <div className="upgradButton">Upgrade</div>
        <div className="notificationicon">
          <img src={notification} alt="notificatin-icon" />
        </div>
      </div>
    </div>
  )
}

export default MainHeading