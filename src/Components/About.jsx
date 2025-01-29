import React, { useContext } from 'react';
import image from '../Images/item1.webp';
import { FaCheckCircle } from "react-icons/fa";
import IsDesktop from '../Context/IsDesktop';
import { HashLinkComponent } from './HashLinkComponent';
export default function About() {
  const listItems = [
    { name: "Objectives of Al-Arqam Academy", link: "/about-us#Objectives", className: '' },
    { name: "How Al-Arqam Accomplishes Goals?", link: "/about-us#Accomplish", className: '' },
    { name: "Graduates of Al-Arqam Academy", link: "/about-us#Graduates", className: '' },
    { name: "Our Team", link: "/about-us#OurTeam", className: 'our-team' },
  ];
  const { isDesktop } = useContext(IsDesktop);
  const content = (
    <>
      <div className="text-section">
        <h2>
          About Al-Arqam Academy
          <span></span>
          <span></span>
        </h2>
        <p>
          Al-Arqam Academy seeks to teach non-Arabic speaking youth the Arabic language through an immersive, rigorous academic course and the company of their Arabic speaking peers. We aim to make Shariah studies accessible by providing young Muslims with knowledge based on the Quran and Sunnah, utilizing a modern, practical approach that incorporates the reality of time and place while staying true to the understanding of the righteous predecessors.
        </p>
        <div className="list">
          {listItems.map((item, index) => (
            <div className="list-item" key={index}>
              <div className='link-cont'>
                <FaCheckCircle />
                <HashLinkComponent name={item.name} link={item.link} />
              </div>
              <span className={item.className}></span>
            </div>
          ))}
        </div>
        <a href='/about-us' className="learn-more-btn">Learn More</a>
      </div>
      <div className="image-section">
        <div className='before'></div>
        <img src={image} alt='About Al-Arqam Academy' />
      </div>
    </>
  );
  return (
    <section className="about-section" id='about-section'>
      <div className="content-wrapper">
        {isDesktop ? (
          <>
            {content}
          </>
        ) : (
          <>
            <div className="image-section">
              <div className='before'></div>
              <img src={image} alt='About Al-Arqam Academy' />
            </div>
            <div className="text-section">
              <h2>
                About Al-Arqam Academy
                <span></span>
                <span></span>
              </h2>
              <p>
                Al-Arqam Academy aims to make Shariah studies accessible by providing young Muslims with knowledge based on the Quran and Sunnah. The program emphasizes a modern, practical approach while staying true to the understanding of the righteous predecessors.
              </p>
              <div className="list">
                {listItems.map((item, index) => (
                  <div className="list-item" key={index}>
                    <div className='link-cont'>
                      <FaCheckCircle />
                      <HashLinkComponent name={item.name} link={item.link} />
                    </div>
                    <span className={item.className}></span>
                  </div>
                ))}
              </div>
              <a href='/about-us' className="learn-more-btn">Learn More</a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
