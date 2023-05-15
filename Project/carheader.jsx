import React from 'react'
import IconCar from '../img/car/iconCar.png'
const Carheader = () => {
  return (
    <div className='car_header'>
        <div className='car_header_logo'>
            <img src={IconCar} alt="logo"/>
        </div>
        <div className='car_header_buttons'>
            <button>Home</button>
            <button>About</button>
            <button>Cars</button>
            <button>Contact</button>
        </div>
        <div className='car_header_loginBox'>
            <button className='car_header_sign'>Sign in</button>
            <button className='car_header_reg'>Register</button>
        </div>
    </div>
  )
}

export default Carheader