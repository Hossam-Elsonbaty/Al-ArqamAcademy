import React, {useContext} from 'react';
import image from '../Images/item1.webp';
import { FaCheckCircle } from "react-icons/fa";
import IsDesktop from '../Context/IsDesktop';
import { HashLinkComponent } from './HashLinkComponent';
export default function About() {
  const { isDesktop } = useContext(IsDesktop);
  return (
    <section class="about-section" id='about-section'>
      {isDesktop 
        ?
        <div class="content-wrapper">
          <div class="text-section">
            <h2>
              About Al-Arqam Academy
              <span></span>
              <span></span>
            </h2>
            <p>
              Al-Arqam Academy seeks to teach non-Arabic speaking youth the Arabic language through an immersive, rigorous academic course and the company of their Arabic speaking peers. We aim to make Shariah studies accessible by providing young Muslims with knowledge based on the Quran and Sunnah, utilizing a modern, practical approach that incorporates the reality of time and place while staying true to the understanding of the righteous predecessors.
            </p>
            <div class="list">
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="Objectives of Al-Arqam Academy" link="/about-us#Objectives"></HashLinkComponent>
                </div>
                <span></span>
              </div>
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="How Al-Arqam Accomplishes Goals?" link="/about-us#Accomplish"></HashLinkComponent>
                </div>
                <span></span>
              </div>
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="Graduates of Al-Arqam Academy" link="/about-us#Graduates"></HashLinkComponent>
                </div>
                <span></span>
              </div>
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="Our Team" link="/about-us#OurTeam"></HashLinkComponent>
                </div>
                <span className='our-team'></span>
              </div>
            </div>
            <a href='/about-us' class="learn-more-btn">Learn More</a>
          </div>
          <div class="image-section">
            <div className='before'></div>
            <img src={image} alt='image'/>
          </div>
        </div>
        :
        <div class="content-wrapper">
          <div class="image-section">
            <div className='before'></div>
            <img src={image} alt='image'/>
          </div>
          <div class="text-section">
            <h2>
              About Al-Arqam Academy
              <span></span>
              <span></span>
            </h2>
            <p>
              Al-Arqam Academy aims to make Shariah studies accessible by providing young Muslims with knowledge based on the Quran and Sunnah. The program emphasizes a modern, practical approach while staying true to the understanding of the righteous predecessors.
            </p>
            <div class="list">
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="Objectives of Al-Arqam Academy" link="/about-us#Objectives"></HashLinkComponent>
                </div>
                <span></span>
              </div>
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="How Al-Arqam accomplish goals?" link="/about-us#Accomplish"></HashLinkComponent>
                </div>
                <span></span>
              </div>
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="Graduates of Al-Arqam Academy" link="/about-us#Graduates"></HashLinkComponent>
                </div>
                <span></span>
              </div>
              <div class="list-item">
                <div className='link-cont'>
                  <FaCheckCircle/> 
                  <HashLinkComponent name="Our Team" link="/about-us#OurTeam"></HashLinkComponent>
                </div>
                <span className='our-team'></span>
              </div>
            </div>
            <a href='/about-us' class="learn-more-btn">Learn More</a>
          </div>
        </div>
      }
    </section>
  )
}
