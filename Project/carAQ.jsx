import React, { useState } from 'react'
import arrow from '../img/car/arrow.png'

const CarAQ = () => {
    const [isActive,setIsActive] = useState([0,0,0])
    function AQ(x){
        let b = [0,0,0]
        b[x] = 1 
        setIsActive(b);
    }
  return (
    <div className='car_FAQ'>
        <h2>FAQ</h2>
        <div>
            <button className={isActive[0] ? 'car_FAQ_accordion_activ' : 'car_FAQ_accordion'} onClick={()=>AQ(0)}>
                1. ?
                <img src={arrow} alt="arrow"/>
            </button>
            <div className={isActive[0] ? 'car_FAQ_panel_activ' : 'car_FAQ_panel'}>
                <p>Lorem ipsum...</p>
            </div>

            <button className={isActive[1] ? 'car_FAQ_accordion_activ' : 'car_FAQ_accordion'} onClick={()=>AQ(1)}>
                2. ?
                <img src={arrow} alt="arrow"/>
            </button>
            <div className={isActive[1] ? 'car_FAQ_panel_activ' : 'car_FAQ_panel'}>
                <p>Lorem ipsum...</p>
            </div>

            <button className={isActive[2] ? 'car_FAQ_accordion_activ' : 'car_FAQ_accordion'} onClick={()=>AQ(2)}>
                3. ?
                <img src={arrow} alt="arrow"/>
            </button>
            <div className={isActive[2] ? 'car_FAQ_panel_activ' : 'car_FAQ_panel'}>
                <p>Lorem ipsum...</p>
            </div>
        </div>
    </div>
  )
}

export default CarAQ