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
import Table from '../Table/Table'
function DashboardContent({ navBardShow }) {
	const styleDashboardContent = ['DashboardContent'];
	const [usersList, setUsersList] = useState();
	const [usersLoading, setUsersLoading] = useState(false);

	if (!navBardShow) {
		styleDashboardContent.push('more')
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
			<div className="DashboardContent__container">
				<HeaderItem />
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
				<div className="DashboardContent__table">

					<div className="DashboardContent__table--header">
						<p>Appointment Activity</p>
					</div>
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

export default DashboardContent

// принцесса моя любимая можешь не читать особо, но лучше надо
// с 26 строчки начинается запрос взять пользователей
// там данные пользователей имя и почта, но запрос больше для того чтобы
// ты использовала map для прохода по массиву
// тебе надо создать лист пользователей, куда будешь передавать usersList
// внутри лита карточки пользователя которые будут принимать только имя и почту, остальное сделай одинаковое у них(фотку заболевание и тд)