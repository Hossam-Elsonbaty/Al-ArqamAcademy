import React from 'react';
import image6 from '../Images/item6.jpeg';
import image7 from '../Images/item7.jpeg';
import image8 from '../Images/item8.jpeg';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3 } from "react-icons/tb";

export const OurPrograms = () => {
  return (
    <main className='programs-page'>
      <section className='programs-header'>
        <h1>
          Our Programs
          <span></span>
          <span></span>
        </h1>
        <p>Explore our offered programs</p>
      </section>
      <section className='programs-col'>
        <div className='program'>
          <aside className='content-aside'>
            <TbSquareNumber1/>
            <div>
              <h2>My first step in the Quran Journey</h2>
              <p>This level is for beginners who are unable to read from the Qur’an. Students graduate from this level able to read fluently in preparation for embarking on the journey of memorizing the Qur’an or beginning the academic stage of learning the Arabic language and Islamic studies.</p>
            </div>
          </aside>
          <aside className='image-aside'>
            <img src={image6} alt="image" style={{width:'350px'}}/>
          </aside>
        </div>
        <div className='program'>
          <aside className='image-aside'>
            <img src={image7} alt="image" style={{width:'350px'}}/>
          </aside>
          <aside className='content-aside'>
            <TbSquareNumber2/>
            <div>
              <h2>Hoffaz Dar Al-Arqam “Memorization”</h2>
              <p>This level is for gifted students who want to complete the memorization of the Qur’an, through intense commitment on an intensive course for not a short period, with teachers with experience in this field. Graduates of this program will be able to participate efficiently in local and international Holy Quran competitions.</p>
            </div>
          </aside>
        </div>
        <div className='program'>
          <aside className='content-aside'>
            <TbSquareNumber3/>
            <div>
              <h2>Inheritors of the Prophet’s program</h2>
              <p>
                This program is a gift from the Al-Arqam Academy to all of our students in the US who wish to learn the Arabic language of the Qur’an in addition to a advance level in Islamic studies which is mandatory for each Muslim such as: (Aqeeda, Jurisprudence, the Prophet's Biography, ...etc.) Graduates of this program will have a great understanding of the Holy Qur’an and the ability to read and understand Arabic and speak at a great level.
                - Students in this program are at least 15 years old.
                - Students will take a placement test in reading and writing in Arabic.
                - Students in this program must be able to read from the Qur’an.
              </p>
            </div>
          </aside>
          <aside className='image-aside'>
            <img src={image8} alt="image" style={{width:'350px'}}/>
          </aside>
        </div>
      </section>
      <a href='/program-application'>Join Us</a>
    </main>
  )
}
