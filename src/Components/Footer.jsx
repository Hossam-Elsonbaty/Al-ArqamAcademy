import React, { useContext } from 'react';
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter  } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import Logo from '../Images/PNG Blue.webp';
import IsDesktop from '../Context/IsDesktop';
import lines1 from '../Images/Group 38.webp'
import lines2 from '../Images/Group 39.webp'
export const Footer = () => {
  const {isDesktop} = useContext(IsDesktop) ;
  return(
    <footer className="footer">
        {isDesktop
        ? 
        <div className="footer-content">
          <div className="logo-section">
            <img src={Logo} alt="Alarqam Academy Logo" className="logo"/>
            <div className="social-icons"> 
              <a href="https://www.facebook.com/share/16HaeyKdzB/?mibextid=wwXIfr"><CiFacebook/></a>
              <a href="https://www.instagram.com/alarqamacademy_ Instagram"><CiInstagram/></a>
              <a href="https://www.tiktok.com/@alarqam.academy1"><PiTiktokLogoThin/></a>
              <a href="https://x.com/alarqamacademy_?s=11&t=cx4itltsC47Rg9ztmUcK9g"><CiTwitter/></a>
              {/* <a href="#"><CiLinkedin/></a> */}
            </div>
          </div>
          <div className="links-section">
            <h3>Links</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/our-programs">Our Programs</a></li>
              <li><a href="/programs-application">Register Now</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="contact-section">
            <h3>Contact us</h3>
            <p>Be the first to hear about upcoming classes, exclusive events, and the latest resources.</p>
          </div>
          <div className="btn-section">
            <img src={lines1} alt="lines" />
            <a className="btn" href='/program-application'>Register Now</a>
            <img src={lines2} alt="lines" />
          </div>
        </div>
        :
        <div className="footer-content">
          <div className="logo-section">
            <img src={Logo} alt="Alarqam Academy Logo" className="logo"/>
          </div>
          <div className="links-section">
            <aside>
              <h3>Links</h3>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/our-programs">Our Programs</a></li>
                <li><a href="/program-application">Register Now</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </aside>
            <div className="contact-section">
              <h3>Contact us</h3>
              <p>Be the first to hear about upcoming classes, exclusive events, and the latest resources.</p>
            </div>
          </div>
          <div className="btn-section">
            <div className="social-icons">
              <a href="https://www.facebook.com/share/16HaeyKdzB/?mibextid=wwXIfr"><CiFacebook/></a>
              <a href="https://www.instagram.com/alarqamacademy_ Instagram"><CiInstagram/></a>
              <a href="https://www.tiktok.com/@alarqam.academy1"><PiTiktokLogoThin/></a>
              <a href="https://x.com/alarqamacademy_?s=11&t=cx4itltsC47Rg9ztmUcK9g"><CiTwitter/></a>
            </div>
            <aside>
              <img src={lines1} alt="lines" />
              <a className='btn' href='/program-application'>Register Now</a>
              <img src={lines2} alt="lines" />
            </aside>
          </div>
        </div>
        }
      <div className="footer-bottom">
        <p>AlArqam Academy &copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}
