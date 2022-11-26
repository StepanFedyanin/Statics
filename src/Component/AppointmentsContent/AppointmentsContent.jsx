import React, { useEffect, useState } from 'react'
import './AppointmentsContent.scss'
import HeaderItem from '../HeaderItem/HeaderItem'
import PostService from '../../API/getUsers'
import Table from '../../Component/Table/Table'

function AppointmentsContent({ navBardShow }) {
	const styleAppointmentsContent = ['AppointmentsContent'];
	const [usersList, setUsersList] = useState();
	const [usersLoading, setUsersLoading] = useState(false);

	if (!navBardShow) {
		styleAppointmentsContent.push('more')
	}
	useEffect(() => {
		getusers();
	}, [])
	const getusers = async () => {
		const response = await PostService.getUsers(10);
		setUsersList(await response.data);
		setUsersLoading(true)
	}
	return (
		<div className={styleAppointmentsContent.join(' ')}>
			<div className="AppointmentsContent__container">
				<HeaderItem />
				<div className="AppointmentsContent__container--header">
					<p>Appointments</p>
				</div>
				<div className="">
					{
						usersLoading ?
							<div className="">
								<Table usersList={usersList} />
							</div>
							:
							null
					}
				</div>
			</div>
		</div>

	)
}

export default AppointmentsContent