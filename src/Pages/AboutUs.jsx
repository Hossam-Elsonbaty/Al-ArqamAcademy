import React from 'react';
import { Objectives } from '../Components/Objectives';
import { FaCircleCheck } from "react-icons/fa6";
import { Graduates } from '../Components/Graduates';
import { OurTeam } from '../Components/OurTeam';
import { Helmet } from 'react-helmet';
import image1 from '../Images/Moaz.webp';
import image2 from '../Images/drHala.webp';
import image3 from '../Images/lighter.webp'
import image4 from '../Images/item4.webp';
export const AboutUs = () => {
  return (
    <>
      <Helmet>
        <link rel="preload" href={image1} as="image" />
        <link rel="preload" href={image2} as="image" />
        <link rel="preload" href={image3} as="image" />
        <link rel="preload" href={image4} as="image" />
      </Helmet>
      <section className='aboutUs-container'>
        <header className='about-header'>
          <h1>
            About Al-Arqam Academy
            <span></span>
            <span></span>
          </h1>
          <p>
            Al-Arqam Academy seeks to teach non-Arabic speaking youth the Arabic language through an immersive, rigorous academic course and the company of their Arabic speaking peers. We aim to make Shariah studies accessible by providing young Muslims with knowledge based on the Quran and Sunnah, utilizing a modern, practical approach that incorporates the reality of time and place while staying true to the understanding of the righteous predecessors.
          </p>
          <a href='/program-application'>Register Now</a>
        </header>
        <section className="objectives" id='Objectives'><Objectives></Objectives></section>
        <section className="accomplish" id='Accomplish'>
          <header>
            <h1>
              How Al-Arqam Accomplishes Goals ?
              <span></span>
              <span></span>
            </h1>
          </header>
          <div className='col'>
            <div className='text-cont'>
              <p>
                <FaCircleCheck/>
                Teaching the Arabic language and its various branches of study starting with correct pronunciations, reading, and writing while equipping students with a Qur’anic vocabulary and required grammar rules and structures to develop them in the four skills of reading, writing, listening, and speaking.
              </p>
              <p><FaCircleCheck/>Advancing to the applications and sciences of Arabic including syntax, morphology, literature, and eloquence to understand Arabic texts in general and to understand and engage with the Quran in particular.</p>
              <p><FaCircleCheck/>Presenting the Shariah sciences in a modern and approachable way utilizing modern methods of teaching in terms of trained professionals and effective teaching tools.</p>
            </div>
            <div className='text-cont'>
              <p><FaCircleCheck/>Studying the Shariah Sciences from primary sources (the Quran and Sunnah) by understanding the best of generations of the righteous predecessors with the most significant explanations from previous and contemporary trusted scholars.</p>
              <div className='cell'>
                <FaCircleCheck/>
                <div className='p-container'>
                  <p>Al-Arqam Curriculum incorporates 7 domains of Shariah</p>
                  <ul>
                    <li>1-Arabic Language</li>
                    <li>2-Aqeedah</li>
                    <li>3-Fiqh</li>
                    <li>4-Hadith</li>
                    <li>5-Tafseer</li>
                    <li>6-Islamic Akhlaq</li>
                    <li>7-Seerah</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a href='/program-application'>Register Now</a>
        </section>
        <section id="Graduates"><Graduates></Graduates></section>
        <section id="OurTeam"><OurTeam></OurTeam></section>
      </section>
    </>
  )
}
