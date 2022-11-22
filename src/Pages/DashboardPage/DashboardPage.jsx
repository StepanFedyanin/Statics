import React, { useState } from 'react'
import DashboardContent from '../../Component/DashboardContent/DashboardContent'
import NavBar from '../../Component/NavBar/NavBar'
import './DashboardPage.scss'
function DashboardPage() {
	const [navBardShow, setNavBardShow] = useState(true);
	const changeNavBarState = (value) => {
		setNavBardShow(value);
	}
	return (
		<div className='DashboardPage'>
			<NavBar navBardShow={navBardShow} changeNavBarState={changeNavBarState} />
			<DashboardContent navBardShow={navBardShow} />
		</div>
	)
}

export default DashboardPage