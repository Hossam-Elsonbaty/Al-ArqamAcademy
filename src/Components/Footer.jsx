import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Logo from '../Images/PNG Blue.png';
import { Link as RouterLink } from 'react-router-dom';
export const Footer = () => {
  return(
    <footer class="footer">
      <div class="footer-content">
        <div class="logo-section">
          <img src={Logo} alt="Alarqam Academy Logo" class="logo"/>
          <div class="social-icons">
            <a href="#"><CiFacebook/></a>
            <a href="#"><CiInstagram/></a>
            <a href="#"><CiTwitter/></a>
            <a href="#"><CiLinkedin/></a>
          </div>
        </div>
        <div class="links-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Programs</a></li>
            <li><a href="#">Register Now</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="contact-section">
          <h3>Contact us</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>+908 89097 890</p>
        </div>
        <div class="btn-section">
          <div className='lines'>
            <span></span>
            <span className='center'></span>
            <span></span>
          </div>
          <button>Register Now</button>
          <div className='lines last'>
            <span></span>
            <span className='center'></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>AlArqam Academy &copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  )
  return (
    <footer id='footerSection' class="bg-gray text-black py-28">
      <div class="container mx-auto text-center">
        <div class="flex justify-center mb-8">
          <a href="#" class="mx-3 text-3xl ">
            <CiFacebook/>
          </a>
          <a href="#" class="mx-3 text-3xl">
            <CiInstagram/>
          </a>
          <a href="#" class="mx-3 text-3xl">
            <CiTwitter/>
          </a>
        </div>
        <div class="flex justify-center space-x-4 text-sm uppercase mb-8">
          <a href="/" class="hover:underline">Home</a>
          <a href="#" class="hover:underline">About</a>
          <RouterLink 
            to="/#programsSection"
            smooth={true} 
            duration={500} 
            offset={-250}
            className="cursor-pointer hover:underline"
          >
            Programs
          </RouterLink>
          <a href="/contact-us" class="hover:underline">Contact Us</a>
          <a href="#" class="hover:underline">Our Team</a>
        </div>
        <div class="text-sm mt-4">
          <p>Copyright ©2022, QuadraCode</p>
        </div>
      </div>
    </footer>
  )
}
