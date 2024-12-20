import React, {useEffect, useState} from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import BackgroundImage from '../Images/Grey.webp';
import Logo from '../Images/PNG Blue vertical.webp';
import { TbBorderRadius } from 'react-icons/tb';
export default function Example() {
  const [displayedText, setDisplayedText] = useState('');
  const text2 = "“Of all of Allah’s servants, only the knowledgeable (of His might) are (Truly)in awe of Him”";
  // const text3 = "” ۗإِنَّمَا يَخْشَى ٱللَّهَ مِنْ عِبَادِهِ ٱلْعُلَمَـٰٓؤُا۟“";
  const text3= "“إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُۗ”"
  const text4 = "(Fatir: 28)  (فاطر: ٢٨) "
  const [text] = useTypewriter({
    words:[text3],
    loop: 1,
    typeSpeed:60
  })
  const divStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize:"cover",
    backgroundPosition: "center",
  };
  const buttonStyle = {
    backgroundColor :'#286982',
    marginTop:'4rem',
    color:'#fff',
    fontSize:'15px',
    borderRadius:'10px',
    padding:'8px',
    textAlign: 'center'
  };
  return (
    <div id='heroSection' className=" h-lvh" style={divStyle}>
      {/* <img src={BackgroundImage} alt="" className='absolute opacity-50 '/> */}
      <div className="relative isolate px-6 sm:pt-16 lg:px-8 ">
        <div className="m-auto max-w-4xl py-12 flex items-center justify-center  sm:py-48 lg:py-0">
          <div className='flex items-center flex-col'>
            <img src={Logo} alt="logo" className='sm:w-96 w-60 mt-10' />
            <p style={{fontFamily:"A Thuluth"}} className="mt-6 text-center text-3xl sm:text-6xl leading-8 text-black">
              {text}
            </p>
            <p className='mt-5 text-sm sm:text-base text-center font-medium sm:leading-xxl text-black'>{text2}</p>
            <p className='mt-5 text-sm font-poppins sm:text-base text-center font-medium sm:leading-xxl  text-black'>{text4}</p>
            <a href='/program-application' className='w-40 sm:w-60' style={buttonStyle}>Register now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

