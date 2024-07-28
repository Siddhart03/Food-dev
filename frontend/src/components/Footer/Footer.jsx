import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae vel adipisci nisi amet error libero harum. Ducimus molestiae adipisci perferendis ex. Quasi nobis dolorum pariatur? Dolores repellat recusandae est?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Delivery</li>
              </ul>
            </div>
            <div className="footer-right">
               <h2>MORE ABOUT US</h2>
               <ul>
                 <li>+91-443-334-8890</li>
                 <li>contactus@tomato.com </li>
               </ul>
            </div>
        </div>
        <hr />
        <p className='copyright'>@copyright 2024 @ tomato.com- All Right Reserved.</p>

    </div>
  )
}

export default Footer