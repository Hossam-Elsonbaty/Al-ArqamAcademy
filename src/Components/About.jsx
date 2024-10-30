import React from 'react';
import Poster from '../Images/Laptop.jpg';
export default function About() {
  return (
    <div id='aboutSection' className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={Poster}
        className="absolute blur-sm inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">About Al-Arqam Academy</h2>
          <p className="mt-6 text-2xl leading-8 text-cyan-950">
            Al-Arqam Academy aims to make Shariah studies accessible for the participants in
            its programs. The main objective of the program is to equip young Muslims with
            the necessary, proper knowledge grounded on the Book of Allah and Sunnah of the
            Prophet (PBUH) to understand their religion and to promote and reinforce sound
            Shariah studies with an understanding of the righteous predecessors through a
            modern, easily fathomable approach that is in touch with the reality of time and
            place.
          </p>
        </div>
      </div>
    </div>
  )
}
