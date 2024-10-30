import React from 'react';
import image from '../Images/JPG Grey_Blue.jpg'
export const Accomplishes = () => {
  return (
    <>
      <div id='accomplishSection' class="bg-white py-24 sm:py-6 accomplish flex flex-col gap-8">
        <header className='header mx-auto max-w-7xl px-6 lg:px-8'>
          <h1 className='font-LibreBaskerville mt-2 text-2xl font-bold tracking-tight sm:text-4xl'> How Tijan Accomplishes This</h1>
        </header>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
            <div className='objective flex gap-5 flex-col '>
              <p className='description'> 
                Upon successful completion of the four academic levels of the program, students
                will have gained the Shariah knowledge necessary to uphold their religion.
                Ultimately, the most significant outcome of this program for the participants is
                being able to worship Allah with insight and educate their families and relatives
                what they need to know in regards to their religion, away from extremism and
                exaggeration, and what will lead them to noble characteristics and traits. If a
                participant is passionate about this knowledge, they can then serve the Shariah
                knowledge by pursuing work in related fields.
                Allah is behind the intention and He is the Guide to the right path.
              </p>
              <div className='checks'>
                <ul className='pl-12'>
                  <li className='mb-5'>
                    <p data-aos="fade-right"data-aos-delay="30" data-aos-duration="300">
                      Teaching the Arabic language and its various branches of study starting with
                      correct pronunciations, reading, and writing while equipping students with a
                      Qur’anic vocabulary and required grammar rules and structures to develop
                      them in the four skills of reading, writing, listening, and speaking.
                    </p>
                  </li>
                  <li className='mb-5'>
                    <p data-aos="fade-right"data-aos-delay="50" data-aos-duration="1000">
                      Advancing to the applications and sciences of Arabic including syntax,
                      morphology, literature, and eloquence to understand Arabic texts in general
                      and to understand and engage with the Quran in particular.
                    </p>
                  </li>
                  <li className='mb-5'>
                    <p data-aos="fade-right"data-aos-delay="100" data-aos-duration="1000">
                      Presenting the Shariah sciences in a modern and approachable way utilizing
                      modern methods of teaching in terms of trained professionals and effective
                      teaching tools.
                    </p>
                  </li>
                  <li className='mb-5'>
                    <p data-aos="fade-right"data-aos-delay="150" data-aos-duration="1000">
                      Studying the Shariah Sciences from primary sources (the Quran and Sunnah)
                      by understanding the best of generations of the righteous predecessors with
                      the most significant explanations from previous and contemporary trusted
                      scholars.
                    </p>
                  </li>
                  <li className='gap-4'>
                    <p data-aos="fade-right"data-aos-delay="200" data-aos-duration="1000">
                      Tijan Curriculum incorporates 7 domains of Shariah (Arabic Language,
                      Aqeedah, Fiqh, Hadith, Tafseer, Islamic Akhlaq, and Seerah).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='img-container' data-aos="fade-up"data-aos-offset="200"data-aos-delay="250" data-aos-duration="1000">
              <img src={image} alt='image' className='image' />
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
