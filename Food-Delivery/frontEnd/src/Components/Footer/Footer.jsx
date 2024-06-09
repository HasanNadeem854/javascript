import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
        <div className="Footer-content">
            <div className="Footer-left">
                <img src={assets.logo} alt="" className="logo" />
                <p>Welcome to Tomato, your ultimate destination for delicious recipes, culinary inspiration, and all things food-related! Our team is passionate about sharing mouthwatering dishes, helpful cooking tips, and engaging content to help you explore the world of flavors in your own kitchen. Connect with us on social media, sign up for our newsletter, and join our food-loving community as we embark on a journey of culinary delight together. Bon appétit!</p>
                <div className="Footer-social-media">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="Footer-center">
                <h2> Company </h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="Footer-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+92-3328639331</li>
                    <li>hasannadeem854@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='Footer-copyright'> Copyrights 2024 Tomato.com-All rights reserved.</p>
      
    </div>
  )
}

export default Footer
