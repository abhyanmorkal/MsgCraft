import React from 'react'
import '../styles/dashboard-paid.scss'
import MainSidebar from '../components/mainsidebar/MainSidebar'

function Dashboard (){
  return(
    <div className="maindashboard">
      <div className='mainSidebar'>
        <MainSidebar/>
      </div>
      <div>Dashboard</div>
    </div>

  )
}
export default Dashboard