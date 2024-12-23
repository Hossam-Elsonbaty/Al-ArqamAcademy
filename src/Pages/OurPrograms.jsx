import React,{useContext} from 'react';
import image6 from '../Images/item6.webp';
import image7 from '../Images/item7.webp';
import image8 from '../Images/item8.webp';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3 } from "react-icons/tb";
import IsDesktop from '../Context/IsDesktop';
export const OurPrograms = () => {
  const {isDesktop} = useContext(IsDesktop)
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
      {isDesktop
      ?
      <section className='programs-col'>
        <div className='program' id="program1">
          <aside className='content-aside'>
            <TbSquareNumber1/>
            <div>
<<<<<<< Updated upstream
              <h2> My First Step in the Quran Language (Arabic)</h2>
=======
              <h2>My First Step in the Quran Language (Arabic)</h2>
>>>>>>> Stashed changes
              <p>Students in this level will learn the Arabic language in terms of its letters, words, structures, meanings, and interpretation. This level ranges from beginners who are unable to read Quran and Arabic to fluent readers seeking to start learning Arabic. Graduates from this level are able to read fluently in preparation for embarking on the journey of memorizing the Qur’an or beginning the academic stage of learning intensive Arabic Language and Islamic Studies.</p>
            </div>
          </aside>
          <aside className='image-aside'>
            <img src={image6} alt="image"/>
          </aside>
        </div>
        <div className='program' id="program2">
          <aside className='image-aside'>
            <img src={image7} alt="image"/>
          </aside>
          <aside className='content-aside'>
            <TbSquareNumber2/>
            <div>
              <h2>Hoffaz Dar Al-Arqam “Memorization”</h2>
<<<<<<< Updated upstream
              <p>This level is for gifted students who want to complete the memorization of the Qur’an that requires strong commitment to an intensive course for an extended period of time with experienced teachers in this field.
=======
              <p>
                This level is for gifted students who want to complete the memorization of the Qur’an that requires strong commitment to an intensive course for an extended period of time with experienced teachers in this field.
>>>>>>> Stashed changes
                Graduates of this program will be able to participate and excel in local and international Holy Quran competitions.
              </p>
            </div>
          </aside>
        </div>
        <div className='program' id="program3">
          <aside className='content-aside'>
            <TbSquareNumber3/>
            <div>
<<<<<<< Updated upstream
              <h2>Inheritors of the Prophets</h2>
=======
              <h2>Inheritors of the Prophets </h2>
>>>>>>> Stashed changes
              <p>
                This program is a gift from the Al-Arqam Academy to all of our students in the US who are fluent in Quran reading and wish to study the Arabic language of the Qur’an in addition to an advanced level of Islamic studies which is mandatory for each Muslim such as Aqeedah, Jurisprudence, the Prophet's Biography, and more.  Graduates of this program will have a comprehensive understanding of the Holy Qur’an and the ability to read, understand, and speak Arabic at a proficient level.
              </p>
            </div>
          </aside>
          <aside className='image-aside'>
            <img src={image8} alt="image" style={{width:'350px'}}/>
          </aside>
        </div>
      </section>
      :
      <section className='programs-col'>
        <div className='program' id="program1">
          <aside className='content-aside'>
            <TbSquareNumber1/>
            <div>
              <h2>My First Step in the Quran Language (Arabic)</h2>
              <p>Students in this level will learn the Arabic language in terms of its letters, words, structures, meanings, and interpretation. This level ranges from beginners who are unable to read Quran and Arabic to fluent readers seeking to start learning Arabic. Graduates from this level are able to read fluently in preparation for embarking on the journey of memorizing the Qur’an or beginning the academic stage of learning intensive Arabic Language and Islamic Studies.</p>
            </div>
          </aside>
          <aside className='image-aside'>
            <img src={image6} alt="image"/>
          </aside>
        </div>
        <div className='program' id="program2">
          <aside className='content-aside'>
            <div>
              <h2>Hoffaz Dar Al-Arqam “Memorization”</h2>
              <p>
                This level is for gifted students who want to complete the memorization of the Qur’an that requires strong commitment to an intensive course for an extended period of time with experienced teachers in this field.
                Graduates of this program will be able to participate and excel in local and international Holy Quran competitions.
              </p>
            </div>
            <TbSquareNumber2/>
          </aside>
          <aside className='image-aside'>
            <img src={image7} alt="image"/>
          </aside>
        </div>
        <div className='program' id="program3">
          <aside className='content-aside'>
            <TbSquareNumber3/>
            <div>
            <h2>Inheritors of the Prophets </h2>
              <p>
                This program is a gift from the Al-Arqam Academy to all of our students in the US who are fluent in Quran reading and wish to study the Arabic language of the Qur’an in addition to an advanced level of Islamic studies which is mandatory for each Muslim such as Aqeedah, Jurisprudence, the Prophet's Biography, and more.  Graduates of this program will have a comprehensive understanding of the Holy Qur’an and the ability to read, understand, and speak Arabic at a proficient level.
              </p>
            </div>
          </aside>
          <aside className='image-aside'>
            <img src={image8} alt="image" />
          </aside>
        </div>
      </section>
      }
      <a href='/program-application'>Join Us</a>
    </main>
  )
}
