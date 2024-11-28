import React from 'react';
import { FaLeanpub } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { BsTranslate } from "react-icons/bs";
import { SiKnowledgebase } from "react-icons/si";
import lighterImage from '../Images/lighter.webp'
export const Objectives = () => {
  return (
    <>
      <div id='objectiveSection' class=" py-14 sm:py-14 objectives items-center flex flex-col gap-28">
        <header className='header'>
          <h1 className='font-poppins mt-2 text-xl font-bold tracking-tight sm:text-2xl'>
            Objectives of Al-Arqam Academy
            <span></span>
            <span></span>
          </h1>
          <p className='font-poppins'> Establish a generation that, </p>
        </header>
        <div class="mx-auto max-w-7xl px-6 lg:px-14">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className='objective 'data-aos="fade-up"data-aos-delay="30" data-aos-duration="300">
              <span className='icon-cont'>
                <img src={lighterImage} alt="icon" />
              </span>
              <h1> Shariah-related information </h1>
              <span className='description'> 
                Is capable of obtaining Shariah-related information from primary sources in
                the Arabic language through valid, reliable, and credible research methods.
              </span>
            </div>
            <div className='objective' data-aos="fade-up"data-aos-offset="200"data-aos-delay="50" data-aos-duration="1000">
              <span className='icon-cont'>
                <img src={lighterImage} alt="icon" />
              </span>
              <h1> Understands the Quran </h1>
              <span className='description'> 
                Understands the Quran and is mindful of its miraculousness; accomplishes
                the higher goal outlined in the Quran of “So that they may ponder over its
                verses”- Quran 38:29.
              </span>
            </div>
            <div className='objective' data-aos="fade-up"data-aos-offset="200"data-aos-delay="100" data-aos-duration="1000">
              <span className='icon-cont'>
                <img src={lighterImage} alt="icon" />
              </span>
              <h1>Teaching of the Quran </h1>
              <span className='description'> 
                Is keen on passing down the teaching of the Quran to future generations
                along with the necessary tools to understand it.
              </span>
            </div>
            <div className='objective' data-aos="fade-up"data-aos-offset="200"data-aos-delay="150" data-aos-duration="1000">
              <span className='icon-cont'>
                <img src={lighterImage} alt="icon" />
              </span>
              <h1> Qualified teachers </h1>
              <span className='description'> 
                Has qualified teachers of the Arabic language and Shariah studies from the
                second generation that are capable of balancing sound knowledge with the
                surrounding culture.
              </span>
            </div>
            <div className='objective' data-aos="fade-up"data-aos-offset="200"data-aos-delay="200" data-aos-duration="1000">
              <span className='icon-cont'>
                <img src={lighterImage} alt="icon" />
              </span>
              <h1> Secure Aqeedah </h1>
              <span className='description'> 
                Is knowledgeable about their Shariah based obligations and essentials of the
                religion (what every Muslim must know); is steadfast on and empowered by
                a secure Aqeedah.
              </span>
            </div>
            <div className='objective' data-aos="fade-up"data-aos-offset="200"data-aos-delay="250" data-aos-duration="1000">
              <span className='icon-cont'>
                <img src={lighterImage} alt="icon" />
              </span>
              <h1> Free from the mixing of religion </h1>
              <span className='description'> 
                Is not captive to the understanding of the translator translating texts and
                sayings for them or limited by meanings lost in translation; is free from the
                mixing of religion with cultural customs and traditions.
              </span>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
