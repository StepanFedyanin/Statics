import React from 'react'
import './CardInfo.scss'
function CardInfo({title,meaning,photo}) {
  return (
    <div className='CardInfo'>
        <div className="CardInfo--img">
            <img src={photo} alt="" />
        </div>
        <div className="CardInfo--content">
            <div className="CardInfo--content__title">
                <p className="CardInfo--title--text">{title}</p>
            </div>  
            <div className="CardInfo--content__meaning">
                <p className="CardInfo--meaning--text">{meaning}</p>
            </div>
        </div>
    </div>
  )
}

export default CardInfo