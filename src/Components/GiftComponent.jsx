import React, { useContext } from 'react';
import BackgroundImage from '../Images/item3.jpeg';
import { BsGift } from "react-icons/bs";
import IsDesktop from '../Context/IsDesktop';
export const GiftComponent = () => {
  const {isDesktop} = useContext(IsDesktop)
  const text = '[ Sahih al-Bukhari #5352 ]'
  const imageStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize:"cover",
    backgroundPosition: "center",
  };
  return (
    <section className='gift-component'>
      {isDesktop
        ?
        <div className='child' style={imageStyle}>
          <div className='background-div'>
            <div className='hadith-div'>
              <p>
                Allah said:“Spend in charity, O son of Adam, and I will spend on you.”
                <span>{text}</span>
              </p>
            </div>
            <p className='generosity'>Your generosity can transform lives. Even a small contribution can make a big difference. Let’s work together to build a brighter future for all. Donate now and be part of this blessed cause.</p>
            <a href='/support-our-journey' className='gift-btn'>
              <BsGift/>
              <p>Gift</p>
            </a>
          </div>
        </div>
        :
        <>
          <div className='child' style={imageStyle}>
            <div className='background-div'>
              <div className='hadith-div'>
                <p>
                  Allah said:<br/>“Spend in charity, O son of Adam, and I will spend on you.”
                  <span>{text}</span>
                </p>
              </div>
              <p className='generosity'>Your generosity can transform lives. Even a small contribution can make a big difference. Let’s work together to build a brighter future for all. Donate now and be part of this blessed cause.</p>
            </div>
          </div>
          <a href='/support-our-journey' className='gift-btn'>
            <BsGift/>
            <p>Gift</p>
          </a>        
        </>
      }
    </section>
  )
}
// background: #286982D9;

