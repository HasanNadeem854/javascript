import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import './index.css'

import PlaceOrder from './Pages/PlaceOrder/PlaceOrder.jsx'
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer/Footer.jsx'
import LogInPopup from './Components/LogInPopup/LogInPopup.jsx'


const App = () => {
  const [showlogin,setshowlogin] = useState(false)

  return (
    <>
    {showlogin?<LogInPopup setshowlogin = {setshowlogin}/>:<></> }
    <div className='app'>
      <NavBar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Cart" element = {<Cart/>}/>
        <Route path = "/PlaceOrder" element = {<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App


