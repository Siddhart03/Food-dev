import React from 'react'
import './Appdown.css'
import { assets } from '../../assets/assets'
const Appdown = () => {
  return (
    <div className='Appdown' id='Appdown'>
        <p>For more perks Download <br /> Tomato App</p>
        <div className="Appdown-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdown