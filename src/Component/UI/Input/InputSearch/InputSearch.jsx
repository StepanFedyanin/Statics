import React from 'react'
import './InputSearch.scss'

function InputSearch({placeholder,photo}) {
  return (
    <div className='InputSearch'>
        <div className="InputSearch--icon">
            <img src={photo} alt="" />
        </div>
        <div className="InputSearch--input">
            <input type="text" placeholder={placeholder} />
        </div>
    </div>
  )
}

export default InputSearch