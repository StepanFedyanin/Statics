import React from 'react'
import DashboardContent from '../../Component/DashboardContent/DashboardContent'
import NavBar from '../../Component/NavBar/NavBar'
import './DashboardPage.scss'
function DashboardPage() {
  return (
    <div className='DashboardPage'>
        <NavBar/>
        <DashboardContent/>
    </div>
  )
}

export default DashboardPage