import React, { useEffect, useState } from 'react'
import './DashboardContent.scss'
import CardInfo from '../CardInfo/CardInfo'
import Appointments from '../../Resources/appointments-card.svg'
import Patients from '../../Resources/newpatients-card.svg'
import Operations from '../../Resources/operations-card.svg'
import Hospital from '../../Resources/hospital-card.svg'
import HeaderItem from '../HeaderItem/HeaderItem'
import Dashboard from '../Dashboard/Dashboard'
import OptionsOne from '../../DashboardOptions/OptionsOne'
import OptionsTwo from '../../DashboardOptions/OptionsTwo'
import OptionsThree from '../../DashboardOptions/OptionsThree'
import PostService from '../../API/getUsers'
function DashboardContent({ navBardShow }) {
	const styleDashboardContent = ['DashboardContent'];
	const [usersList, setUsersList] = useState();
	const [usersLoading, setUsersLoading] = useState(false);

	if (!navBardShow) {
		styleDashboardContent.push('more')
		console.log(true);
	}
	useEffect(() => {
		getusers();
	}, [])
	const getusers = async () => {
		const response = await PostService.getUsers();
		console.log(await response.data);
		setUsersList(await response.data);
		setUsersLoading(true)
	}
	return (
		<div className={styleDashboardContent.join(' ')}>
			<HeaderItem />
			<div className="DashboardContent__container">
				<div className="DashboardContent__card">
					<CardInfo title="Appointments" meaning="213" photo={Appointments} />
					<CardInfo title="New Patients" meaning="104" photo={Patients} />
					<CardInfo title="Operations" meaning="24" photo={Operations} />
					<CardInfo title="Hospital Earnings" meaning="$ 12,174" photo={Hospital} />
				</div>

				<div className="DashboardContent__survey">
					<div className="DashboardContent__survey--item">
						<Dashboard
							options={OptionsOne}
						/>
					</div>
					<div className="DashboardContent--money">
						<div className="DashboardContent--money__item">
							<Dashboard
								options={OptionsTwo}
							/>
						</div>
						<div className="DashboardContent--money__item">
							<Dashboard
								options={OptionsThree}
							/>
						</div>
					</div>
				</div>
				<div className="">
					{
						usersLoading ?
							<div className="">загрузилось</div>
							:
							<div className="">не загрузилось</div>
					}
				</div>
			</div>

		</div>
	)
}

export default DashboardContent