import React from 'react'
import './NavBar.scss'
import { Link, NavLink, BrowserRouter } from 'react-router-dom'
import logo from '../../Resources/logo.svg'
import LabelIcon from '../UI/Label/LabelIcon/LabelIcon'
import dashboard from '../../Resources/dashboard.svg'
import appointments from '../../Resources/appointments.svg'
import doctors from '../../Resources/doctors.svg'
import departments from '../../Resources/departments.svg'
import patients from '../../Resources/patients.svg'
import payments from '../../Resources/payments.svg'
import help from '../../Resources/help.svg'

function NavBar() {
    return (
        <div className='NavBar'>
            <div className="NavBar--logo">
                <img src={logo} alt="" />
            </div>
            <div className="NavBar--list">
                <div className="NavBar--list__title">
                    <h1 className='NavBar--list__titleH1'>MEDICINE</h1>
                </div>
                <nav className="NavBar--list--nav">
                    <ul className='NavBar--nav--item'>
                        <li className='NavBar--item__block'>
                            <NavLink className={({ isActive }) => isActive ? 'NavBar--item__active' : 'NavBar--item__link'} to="/dashboard">
                                <LabelIcon photo={dashboard}>Dashboard</LabelIcon>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='NavBar--nav--item'>
                        <li className='NavBar--item__block'>
                            <NavLink className={({ isActive }) => isActive ? 'NavBar--item__active' : 'NavBar--item__link'} to="/appointments">
                                <LabelIcon photo={appointments}>Appointments</LabelIcon>
                            </NavLink>
                        </li>
                    </ul>

                    <ul className='NavBar--nav--item'>
                        <li className='NavBar--item__block'>
                            <LabelIcon photo={doctors}>Doctors</LabelIcon>
                        </li>
                    </ul>

                    <ul className='NavBar--nav--item'>
                        <li className='NavBar--item__block' >
                            <LabelIcon photo={departments}>Departments</LabelIcon>
                        </li>
                    </ul>

                    <ul className='NavBar--nav--item'>
                        <li className='NavBar--item__block'>
                            <LabelIcon photo={patients}>Patients</LabelIcon>
                        </li>
                    </ul>

                    <ul className='NavBar--nav--item'>
                        <li className='NavBar--item__block'>
                            <LabelIcon photo={payments}>Payments</LabelIcon>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="NavBar--help">
                <NavLink className={({ isActive }) => isActive ? 'NavBar--item__active' : 'NavBar--item__link'} to="/appointments">
                    < LabelIcon photo={help}>Help</LabelIcon>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar