import React from 'react'
import './LabelIcon.scss'

function LabelIcon({children, photo}) {
  return (
    <div className='LabelIcon'>
        <div className='LabelIcon--item'>
            <img src={photo} alt="" />
        </div>
        <div className='LabelIcon--item'>
            <label className='LabelIcon--label'>{children}</label>
        </div>
    </div>
  )
}

export default LabelIcon