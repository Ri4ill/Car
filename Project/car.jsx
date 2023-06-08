import React from 'react'
import CarMain from './carMain'
import Carheader from './carheader'
import Cartop from './cartop'
import Carfind from './carfind'
import CarAQ from './carAQ'

const Car = () => {
  return (
    <div>
        <Carheader/>
        <Cartop/>
        <Carfind/>
        <CarMain/>
        <CarAQ/>
    </div>
  )
}

export default Car
