import React, {useState} from 'react';
import { HiOutlineMail } from "react-icons/hi";
import line from '../Images/Vector (1).webp';
import dotted from '../Images/Group 71.webp';
import faceLogo from '../Images/facebook.webp';
import instagramLogo from '../Images/instagram.webp';
import tiktokLogo from '../Images/TikTok-Logo.wine.webp';
import { notification } from 'antd';
export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description
    });
  };
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    let contactData = { name, email, message };
    if (!checkbox) {
      return openNotificationWithIcon('error', 'Failed Operation', 'Please check the consent');
    }
    try {
      console.log("Attempting request with data:", contactData);
      const response = await fetch('https://al-arqam-banckend.vercel.app/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      console.log("Request succeeded:", response); 
      openNotificationWithIcon('success', 'Success Operation', 'Thank you for your time. Your application has been submitted');
    } catch (error) {
      console.error("Request failed:", error.response?.data || error.message);
      openNotificationWithIcon('error', 'Failed Operation', 'Please fill your data correctly');
    }
  };
  return (
    <main className='contact-us'>
      {contextHolder}
      <div className="card">
        <img src={dotted} alt="" className='dotted'/>
        <h1>
          Contact Us
          <img src={line} alt='image' />
        </h1>
        <div className="elements">
          <aside className='message'>
            <p>Send Us a Message </p>
            <form onSubmit={handleContactSubmit}>
              <input type="text" placeholder='Your Name' required onChange={(e)=>{setName(e.target.value)}}/>
              <input type="email" placeholder='Your Email' required onChange={(e)=>{setEmail(e.target.value)}}/>
              <input type="text" placeholder='Your Message' required onChange={(e)=>{setMessage(e.target.value)}}/>
              <div class="checkbox-container">
                <input type="checkbox" id="consentCheckbox" onChange={(e)=>{setCheckbox(!checkbox)}}/>
                <label for="consentCheckbox" class="custom-checkbox"></label>
                <label for="consentCheckbox" className='label'>I consent to Alarqm Academy collecting my details through this form</label>
              </div>
              <button type='submit'>Send</button>
            </form>
          </aside>
          <aside className='contact-info'>
            <div className='icons'>
              <HiOutlineMail/>
              <a href='mailto:info@AlarqamAcademy.org'>info@AlarqamAcademy.org</a>
            </div>
            {/* <div className='icons'>
              <SlLocationPin/>
              <span> [Insert Location]</span>
            </div> */}
            <div className='social'>
              <div className='social-logo'>
                <a href="https://www.instagram.com/alarqamacademy_?igsh=ZjcydjY4cHV0ZmVp&utm_source=qr"><img src={instagramLogo} alt='image' /></a>
                <a href="#"><img src={faceLogo} alt='image' /></a>
                <a href="https://www.tiktok.com/@alarqam.academy1?_t=8sgWVAjo8oZ&_r=1"><img src={tiktokLogo} alt='image' /></a>
              </div>
              <span>AlarqamAcademy</span>
            </div>
          </aside>
        </div>
        <img src={dotted} alt='image' className='dot'/>
      </div>
    </main>
  );
};