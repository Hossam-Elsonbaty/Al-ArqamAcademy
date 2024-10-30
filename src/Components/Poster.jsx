import React from 'react';
import poster from '../Images/Poster.jpg';
export default function Poster() {
  return (
    <div id='posterSection' className="relative offset  isolate overflow-hidden py-24 sm:py-32">
      <img
        alt="image"
        src={poster}
        className=" absolute bg-fixed inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl relative px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-5xl lg:mx-0 ">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">Graduates of Al-Arqam Academy</h2>
          <p className="mt-6 text-lg text-gray-300">
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
        </div>
      </div>
    </div>
  )
}
