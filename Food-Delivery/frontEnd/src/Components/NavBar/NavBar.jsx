import React,{useContext, useState} from 'react'
import { assets } from '../../assets/assets'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/Context'
const NavBar = ({setshowlogin}) => {
    const[forCheck, setforCheck] = useState("home");
    const {cartTotalAmount } = useContext(StoreContext)
  return (
    <div className='nav-bar'>
         <Link to  = "./"><img src={assets.logo} className='logo' /></Link>
        <ul className='nav-bar-menue'>
        <Link  to='/' className={forCheck === 'home' ? 'active' : ''} onClick={() => setforCheck("home")}>home</Link>
        <a href='#explore-menue' className={forCheck === 'menu' ? 'active' : ''} onClick={() => setforCheck("menu")}>menu</a>
        <a href='#mobile-app' className={forCheck === 'mobile-app' ? 'active' : ''} onClick={() => setforCheck("mobile-app")}>mobile-app</a>
        <a href='#footer' className={forCheck === 'contact-us' ? 'active' : ''} onClick={() => setforCheck("contact-us")}>contact-us</a>
        </ul>
        <div className='nav-bar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='nav-bar-search-icon'>
               <Link to  = "./cart"> <img  src={assets.basket_icon} alt="" /></Link>
                <div className= {cartTotalAmount()==0?"":"dot"}></div>
            </div>
            <button onClick={()=>setshowlogin(true)}>sign in</button>
        </div>
      
    </div>
  )
}

export default NavBar
