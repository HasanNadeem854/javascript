import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

const LogInPopup = ({setshowlogin}) => {
    const[currtState,setcurrentState] = useState("Log in")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currtState}</h2>
                <img onClick = {()=>{setshowlogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-info">
                {currtState==="Log in"?<></>: <input type="text" placeholder='Name' required />}
                <input type="text" placeholder='Email' required />
                <input type="text" placeholder='Password' required />
            </div>
            <button>{currtState ==="Sign up"?"Create an account":"Log in"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"required />
                <p>Terms and condition agreed to u 😉</p>
            </div>
            {currtState==="Log in"
            ?<p>Create an account <span onClick={()=>setcurrentState("Sign up")}>Click here</span> </p>
            :<p>I have already an account <span onClick={()=>setcurrentState("Log in")} >Log-in here</span> </p>}
        </form>
    </div>
  )
}

export default LogInPopup
