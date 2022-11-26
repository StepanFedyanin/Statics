import React, { useContext } from 'react'
import InputSearch from '../UI/Input/InputSearch/InputSearch'
import './HeaderItem.scss'
import Search from '../../Resources/search.svg'
import Notification from '../../Resources/notification.svg'
import Person from '../../Resources/person.svg'
import ContextInput from '../../Context/ContextInput'

function HeaderItem() {
    const { entranceContext, setEntranceContext } = useContext(ContextInput);
    return (
        <div className='HeaderItem'>
            <div className="HeaderItem__container">
                <InputSearch placeholder='Search' photo={Search} />
                <div className="HeaderItem--content">
                    <div className="HeaderItem--content__notifications">
                        <img src={Notification} alt="" />
                    </div>
                    <div className="HeaderItem--content__person" onClick={()=>setEntranceContext({'booleanInput':false})}>
                        <img src={Person} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderItem