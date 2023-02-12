import React from 'react'
import './herosec.css'
import moon from "./images/moon.png"
export const Herosection = () => {
  
  return (
    <div className="Herosection container">
        <div className="hscon">
        <img  className="moonimg" src={moon} alt="" />
        <h1>MOON STONE</h1>
        </div>
    </div>
  )
}
