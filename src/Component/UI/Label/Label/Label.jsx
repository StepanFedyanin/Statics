import React from 'react'
import './Label.scss'

function LabelItem({children}) {
  return (
    <div>
        <label className='LabelItem'>{children}</label>
    </div>
  )
}

export default LabelItem