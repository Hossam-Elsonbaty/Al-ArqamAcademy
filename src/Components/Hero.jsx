import React, {useEffect, useState} from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import BackgroundImage from '../Images/UntitledProject.jpg';
export default function Example() {
  const [displayedText, setDisplayedText] = useState('');
  // const text = "AL-Arqam Academy aims to make Shariah studies accessible for the participants in its programs. The main objective of the program is to equip young Muslims with the necessary, proper knowledge grounded on the Book of Allah and Sunnah of the Prophet (PBUH) to understand their religion and to promote and reinforce sound Shariah studies with an understanding of the righteous predecessors through a modern, easily fathomable approach that is in touch with the reality of time and place.";
  const text2 = "“Of all of Allah’s servants, only the knowledgeable (of His might) are (Truly)in awe of Him”";
  const text3 = "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ";
  // const text3 = "“إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ”"
  const [text] = useTypewriter({
    words:[text3],
    loop: 1,
    typeSpeed:60
  })
  const divStyle = {
    backgroundImage: `url(${BackgroundImage})`,
  };
  return (
    <div id='heroSection' className=" h-lvh bg-cyan-700">
      <div className="relative isolate px-6 pt-24 lg:px-8 ">
        <div className="m-auto max-w-4xl py-0 flex items-center justify-center  sm:py-48 lg:py-56">
          <div>
            {/* <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
              ALARQAM METHODS
            </h1> */}
            <p className="mt-6 text-3xl text-center leading-8 text-white">
              {text}
            </p>
            <p className='mt-5 text-2xl text-center leading-xxl text-white'>{text2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

