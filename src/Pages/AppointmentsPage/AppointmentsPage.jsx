import React, { useState } from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import AppointmentsContent from '../../Component/AppointmentsContent/AppointmentsContent'
import './AppointmentsPage.scss'

function AppointmentsPage() {
	const [navBardShow, setNavBardShow] = useState(true);
	const changeNavBarState = (value) => {
		setNavBardShow(value);
	}
	return (
		<div className='AppointmentsPage'>
			<NavBar navBardShow={navBardShow} changeNavBarState={changeNavBarState} />
			<AppointmentsContent navBardShow={navBardShow} />
		</div>
	)
}

export default AppointmentsPage