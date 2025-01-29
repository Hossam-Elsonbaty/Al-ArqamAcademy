import React, {useEffect, useState} from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import Logo from '../Images/PNG Blue vertical.webp';
import BackgroundImage from '../Images/Grey.webp';
export default function Example() {
  const text2 = "“Of all of Allah’s servants, only the knowledgeable (of His might) are (Truly)in awe of Him”";
  const text3= "“إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُۗ”"
  const text4 = "(Fatir: 28)  (فاطر: ٢٨) "
  const [text] = useTypewriter({
    words:[text3],
    loop: 1,
    typeSpeed:60
  })
  return (
    <>
      <div id='heroSection' className="hero-section" >
        <img src={BackgroundImage} alt="BackgroundImage" className='BackgroundImage'/>
        <div className='content-wrapper'>
          <img src={Logo} alt="logo" className='' />
          <p style={{fontFamily:"A Thuluth"}} className="thuluth">
            {text}
          </p>
          <p className='text'>{text2}</p>
          <p className='text'>{text4}</p>
          <a href='/program-application'className='reg-btn'>Register now</a>
        </div>
      </div>
    </>
  )
}

