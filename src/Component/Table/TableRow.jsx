import React from 'react'
import './Table.scss'
import Write from '../../Resources/write.svg'
import Delete from '../../Resources/delete.svg'
import avatar from '../../Resources/avatar.png'
function TableRow({ user }) {
	return (

		<tr className='TableContent__row'>
			<td>
				<div className="TableContent__row--container">
					<div className="TableContent__row--avatar">
						<img src={avatar} alt="" />
					</div>
					{user.name}
				</div>
			</td>
			<td>{user.email}</td>
			<td>Date</td>
			<td>Visit Time</td>
			<td>Doctor</td>
			<td>Conditions</td>
			<td className='TableContent__row--icon'><img src={Write} /></td>
			<td className='TableContent__row--icon'><img src={Delete} /></td>
		</tr>

	)
}

export default TableRow