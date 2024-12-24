import React from 'react';
import image1 from '../Images/Moaz.webp';
import image2 from '../Images/drHala.webp';
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
export const OurTeam = () => {
  return (
    <>
      <div id='OurTeam' class="bg-white pt-12 py-24 sm:py-16 objectives items-center flex flex-col gap-10">
        <header className='header'>
          <h1 className='font-poppins'>
            Our Team
            <span></span>
            <span></span>
          </h1>
        </header>
        <div  class="mx-auto max-w-7xl px-6 lg:px-8 ourTeam">
          <dl class="grid grid-cols-1 gap-x-16 gap-y-16 text-center lg:grid-cols-2">
            <div className='teammate p-4 sm:p-10 flex flex-col gap-6 items-start'data-aos="fade-right"data-aos-delay="500" data-aos-duration="1000">
              <div className="imgContainer">
                <img src={image2} alt="image" className='teammateImage' />
              </div>
              <h1 className='font-poppins text-2xl font-bold'>Ustatha. Hala Charif</h1>
              <p className='description text-zinc-500'> 
                Al-Arqam Academy Director
              </p>
              <div className='social-media'>
                <a href="#"><CiFacebook className='text-blue-600'/></a>
                <a href="#"><CiInstagram className='text-violet-600'/></a>
                <a href="#"><CiLinkedin className='text-blue-600'/></a>
              </div>
            </div>
            <div className='teammate p-4 sm:p-10 flex flex-col gap-6 items-start'data-aos="fade-right"data-aos-delay="1000" data-aos-duration="1000">
              <div className="imgContainer">
                <img src={image1} alt="image" className='teammateImage' />
              </div>
              <h1 className='font-poppins text-2xl font-bold'>Imam. Moaz Raof</h1>
              <p className='description text-zinc-500'> 
                Imam of Islamic Center of TN
              </p>
              <div className='social-media'>
                <a href="#"><CiFacebook className='text-blue-600'/></a>
                <a href="#"><CiInstagram className='text-violet-600'/></a>
                <a href="#"><CiLinkedin className='text-blue-600'/></a>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
