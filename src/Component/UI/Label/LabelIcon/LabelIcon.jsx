import React from 'react'
import './LabelIcon.scss'

function LabelIcon({ children, photo, navBardShow }) {
	return (
		<div className='LabelIcon'>
			<div className='LabelIcon--item'>
				<img src={photo} alt="" />
			</div>
			<div className={navBardShow ? 'LabelIcon--item' : 'LabelIcon--item --hide'}>
				<label className='LabelIcon--label'>{children}</label>
			</div>
		</div>
	)
}

export default LabelIcon