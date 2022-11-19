import React from 'react'
import './DashboardContent.scss'
import CardInfo from '../CardInfo/CardInfo'
import Appointments from '../../Resources/appointments-card.svg'
import Patients from '../../Resources/newpatients-card.svg'
import Operations from '../../Resources/operations-card.svg'
import Hospital from '../../Resources/hospital-card.svg'
import HeaderItem from '../HeaderItem/HeaderItem'
import Dashboard from '../Dashboard/Dashboard'
import Highcharts from '../../DashboardOptions/OptionsOne'
function DashboardContent() {
  return (
    <div className='DashboardContent'>
        <HeaderItem/>
        <div className="DashboardContent__container">
        <div className="DashboardContent__card">
            <CardInfo title="Appointments" meaning="213" photo={Appointments}/>
            <CardInfo title="New Patients" meaning="104" photo={Patients}/>
            <CardInfo title="Operations" meaning="24" photo={Operations}/>
            <CardInfo title="Hospital Earnings" meaning="$ 12,174" photo={Hospital}/>
        </div>
        <div className="">
            <Dashboard 
            options={Highcharts}
            />
        </div>
        </div>

    </div>
  )
}

export default DashboardContent