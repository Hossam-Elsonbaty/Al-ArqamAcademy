import React, { useContext } from 'react';
import image from '../Images/item2.webp';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3 } from "react-icons/tb";
import { HashLinkComponent } from './HashLinkComponent';
export default function OurPrograms() {
  return (
    <section id='programs-section' class="programs-section">
      <div class="content-wrapper">
        <div class="image-section">
          <div className='before'></div>
          <img src={image}/>
        </div>
        <div class="text-section">
          <h2>
            Our Programs
            <span></span>
            <span></span>
          </h2>
          <div class="items">
            <div class="item">
              <HashLinkComponent link="/our-programs#program1">
                <TbSquareNumber1 />
                <div className='col'>
                  <h3>Program   1</h3>
                  <p>My First Step in the Quran Language (Arabic)</p>
                </div>
              </HashLinkComponent>
            </div>
            <div class="item">
              <HashLinkComponent link="/our-programs#program2">
                <TbSquareNumber2 />
                <div className='col'>
                  <h3>Program   2</h3>
                  <p>Hoffaz Dar Al-Arqam “Memorization”</p>
                </div>
              </HashLinkComponent>
            </div>
            <div class="item">
              <HashLinkComponent link="/our-programs#program3">
                <TbSquareNumber3 />
                <div className='col'>
                  <h3>Program   3</h3>
                  <p>Inheritors of the Prophets</p>
                </div>
              </HashLinkComponent>
            </div>
          </div>
          <a href='/our-programs' class="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>
  )
}
