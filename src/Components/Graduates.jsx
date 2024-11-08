import React from 'react';
import image from '../Images/item4.jpeg';

export const Graduates = () => {
  return (
    <section className='graduates-container'>
      <aside>
        <header>
          <h1>
          Graduates of Al-Arqam Academy
          <span></span>
          <span></span>
          </h1>
        </header>
        <p>
          Upon successful completion of the four academic levels of the program, students will have gained the Shariah knowledge necessary to uphold their religion.
          Ultimately, the most significant outcome of this program for the participants is being able to worship Allah with insight and educate their families and relatives what they need to know in regards to their religion,
          away from extremism and exaggeration, and what will lead them to noble characteristics and traits. If a participant is passionate about this knowledge, they can then serve the Shariah knowledge by pursuing work in related fields.
          Allah is behind the intention and He is the Guide to the right path.
        </p>
        <button>Register Now</button>
      </aside>
      <aside>
        <img src={image} alt="image" />
      </aside>
    </section>
  )
}
