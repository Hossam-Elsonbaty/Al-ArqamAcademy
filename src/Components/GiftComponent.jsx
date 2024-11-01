import React from 'react';
import BackgroundImage from '../Images/item3.jpeg';
import { BsGift } from "react-icons/bs";
export const GiftComponent = () => {
  const text = '[ Sahih al-Bukhari #5352 ]'
  const imageStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize:"cover",
    backgroundPosition: "center",
  };
  return (
    <section className='gift-component'>
      <div className='child' style={imageStyle}>
        <div className='background-div'>
          <div className='hadith-div'>
            <p>
              Allah said: “Spend in charity, O son of Adam, and I will spend on you.”
              <span>{text}</span>
            </p>
          </div>
          <p className='generosity'>Your generosity can transform lives. Even a small contribution can make a big difference. Let’s work together to build a brighter future for all. Donate now and be part of this blessed cause.</p>
          <button className='gift-btn'>
            <BsGift/>
            <p>Gift</p>
          </button>
        </div>
      </div>
    </section>
  )
}
// background: #286982D9;

