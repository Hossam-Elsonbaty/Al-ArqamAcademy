import React, { useContext } from 'react';
import image from '../Images/item2.webp';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3 } from "react-icons/tb";
import { HashLinkComponent } from './HashLinkComponent';
export default function OurPrograms() {
  return (
    <section id='programs-section' className="programs-section">
      <div className="content-wrapper">
        <div className="image-section">
          <div className='before'></div>
          <img src={image}/>
        </div>
        <div className="text-section">
          <h2>
            Our Programs
            <span></span>
            <span></span>
          </h2>
          <div className="items">
            <div className="item">
              <HashLinkComponent link="/our-programs#program1">
                <TbSquareNumber1 />
                <div className='col'>
                  <h3>Program   1</h3>
                  <p>My First Step in the Quran Language (Arabic)</p>
                </div>
              </HashLinkComponent>
            </div>
            <div className="item">
              <HashLinkComponent link="/our-programs#program2">
                <TbSquareNumber2 />
                <div className='col'>
                  <h3>Program   2</h3>
                  <p>Hoffaz Dar Al-Arqam “Memorization”</p>
                </div>
              </HashLinkComponent>
            </div>
            <div className="item">
              <HashLinkComponent link="/our-programs#program3">
                <TbSquareNumber3 />
                <div className='col'>
                  <h3>Program   3</h3>
                  <p>Inheritors of the Prophets</p>
                </div>
              </HashLinkComponent>
            </div>
          </div>
          <a href='/our-programs' className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>
  )
}
