import React from 'react';
import { Objectives } from '../Components/Objectives';
import { FaCircleCheck } from "react-icons/fa6";
import { Graduates } from '../Components/Graduates';
import { OurTeam } from '../Components/OurTeam';
export const AboutUs = () => {
  return (
    <section className='aboutUs-container'>
      <header className='about-header'>
        <h1>
          About Al-Arqam Academy
          <span></span>
          <span></span>
        </h1>
        <p>
          Al-Arqam Academy aims to make Shariah studies accessible for the participants in its programs.
          The main objective of the program is to equip young Muslims with the necessary,
          proper knowledge grounded on the Book of Allah and Sunnah of the Prophet (PBUH) to understand their religion 
          and to promote and reinforce sound Shariah studies with an understanding of the righteous predecessors through a modern,
          easily fathomable approach that is in touch with the reality of time and place.
        </p>
        <button>Register Now</button>
      </header>
      <section className="objectives"><Objectives></Objectives></section>
      <section className="accomplish">
        <header>
          <h1>
            How Al-Arqam Accomplish Goals ?
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
            <p><FaCircleCheck/>
              Tijan Curriculum incorporates 7 domains of Shariah
            </p>
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
        <button>Register Now</button>
      </section>
      <Graduates></Graduates>
      <OurTeam></OurTeam>
    </section>
  )
}
