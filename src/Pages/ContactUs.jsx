import React from 'react';
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import line from '../Images/Vector (1).webp';
import dotted from '../Images/Group 71.png';
import faceLogo from '../Images/facebook.png'
import instagramLogo from '../Images/instagram.png'
export const ContactUs = () => {
  return (
    <main className='contact-us'>
      <div className="card">
        <img src={dotted} alt="" className='dotted'/>
        <h1>
          Contact Us
          <img src={line} alt="" />
        </h1>
        <div className="elements">
          <aside className='message'>
            <p>Send Us a Message </p>
            <form action="">
              <input type="text" placeholder='Your Name'/>
              <input type="text" placeholder='Your Email'/>
              <input type="text" placeholder='Your Message'/>
              <div class="checkbox-container">
                <input type="checkbox" id="consentCheckbox"/>
                <label for="consentCheckbox" class="custom-checkbox"></label>
                <label for="consentCheckbox" className='label'>I consent to Alarqm Academy collecting my details through this form</label>
              </div>
              <button>Send</button>
            </form>
          </aside>
          <aside className='contact-info'>
            <div className='icons'>
              <HiOutlineMail/>
              <a href='mailto:info@AlarqamAcademy.org'>info@AlarqamAcademy.org</a>
            </div>
            <div className='icons'>
              <HiOutlinePhone/>
              <span> [Insert mailing address]</span>
            </div>
            <div className='icons'>
              <SlLocationPin/>
              <span> [Insert mailing address]</span>
            </div>
            <div className='social'>
              <div className='social-logo'>
                <img src={instagramLogo} alt="" />
                <img src={faceLogo} alt="" />
              </div>
              <span>AlarqamAcademy</span>
            </div>
          </aside>
        </div>
        <img src={dotted} alt="" className='dot'/>
      </div>
    </main>
  );
};