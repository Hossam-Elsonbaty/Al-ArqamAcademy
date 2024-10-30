import React from 'react';
import image1 from '../Images/Screenshot 2024-10-15 223035.png'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
export const OurTeam = () => {
  return (
    <>
      <div id='OurTeam' class="bg-white pt-12 py-24 sm:py-16 objectives items-center flex flex-col gap-10">
        <header className='header'>
          <h1 className='mt-2 text-2xl font-bold tracking-tight sm:text-4xl font-LibreBaskerville '>Our Team</h1>
        </header>
        <div  class="mx-auto max-w-7xl px-6 lg:px-8 ourTeam">
          <dl class="grid grid-cols-1 gap-x-16 gap-y-16 text-center lg:grid-cols-3">
            <div className='teammate p-10 flex flex-col gap-6 items-center'data-aos="fade-right"data-aos-delay="500" data-aos-duration="1000">
              <div className="imgContainer">
                <img src={image1} alt="image" className='teammateImage' />
              </div>
              <h1 className='font-LibreBaskerville text-xl'>Moaz Raof</h1>
              <p className='description text-gray-500'> 
                FOUNDER/CEO
              </p>
              <div className='social-media'>
                <a href="#"><CiFacebook className='text-blue-600'/></a>
                <a href="#"><CiInstagram className='text-violet-600'/></a>
                <a href="#"><CiLinkedin className='text-blue-600'/></a>
              </div>
            </div>
            <div className='teammate p-10 flex flex-col gap-6 items-center'data-aos="fade-right"data-aos-delay="1000" data-aos-duration="1000">
              <div className="imgContainer">
                <img src={image1} alt="image" className='teammateImage' />
              </div>
              <h1 className='font-LibreBaskerville text-xl'>Moaz Raof</h1>
              <p className='description text-gray-500'> 
                FOUNDER/CEO
              </p>
              <div className='social-media'>
                <a href="#"><CiFacebook className='text-blue-600'/></a>
                <a href="#"><CiInstagram className='text-violet-600'/></a>
                <a href="#"><CiLinkedin className='text-blue-600'/></a>
              </div>
            </div>
            <div className='teammate p-10 flex flex-col gap-6 items-center'data-aos="fade-right"data-aos-delay="1500" data-aos-duration="1000">
              <div className="imgContainer">
                <img src={image1} alt="image" className='teammateImage' />
              </div>
              <h1 className='font-LibreBaskerville text-xl'>Moaz Raof</h1>
              <p className='description text-gray-500'> 
                FOUNDER/CEO
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
