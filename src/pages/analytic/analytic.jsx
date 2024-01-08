import React from 'react'
import MainSidebar from '../../components/mainsidebar/MainSidebar'
import FirstHeader from '../../components/header/FirstHeader'
import MainHeading from '../../components/header/MainHeading'
import "./analytic.scss"

const analytic = () => {
  return (
    <div className="main">
        <MainSidebar />
        <div className="body">
        <FirstHeader></FirstHeader>
        <MainHeading></MainHeading>
      </div>
    </div>
  )
}

export default analytic