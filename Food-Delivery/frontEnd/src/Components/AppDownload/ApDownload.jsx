import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const ApDownload = () => {
  return (
    <div className='Appdownload' id='mobile-app'>
      <h2>For the better experience pls download.<br/> Tomato App</h2> 
      <div className="Appdownload-store">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default ApDownload
