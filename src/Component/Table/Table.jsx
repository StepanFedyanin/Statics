import React from 'react'
import './Table.scss'
import TableRow from '../../Component/Table/TableRow'

function Table({ usersList }) {
	return (
		<div className="Table">
			<table className='TableContent'>
				<thead>
					<tr className='TableContent__header'>
						<th>Name</th>
						<th>Email</th>
						<th>Date</th>
						<th>Visit Time</th>
						<th>Doctor</th>
						<th>Conditions</th>
						<th className='TableContent__header--icon'></th>
						<th className='TableContent__header--icon'></th>
					</tr>
				</thead>
				<tbody>
					{
						usersList.map((item) =>
							<TableRow key={item.id} user={item} />
						)
					}
				</tbody>
			</table>
		</div>
	)
}

export default Table