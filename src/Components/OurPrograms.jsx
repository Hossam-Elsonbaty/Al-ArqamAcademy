import React from 'react';
import image from '../Images/item2.webp';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3 } from "react-icons/tb";
import { HashLinkComponent } from './HashLinkComponent';

export default function OurPrograms() {
  const programs = [
    {
      id: 1,
      link: "/our-programs#program1",
      icon: <TbSquareNumber1 />,
      title: "Program 1",
      description: "My First Step in the Quran Language (Arabic)",
    },
    {
      id: 2,
      link: "/our-programs#program2",
      icon: <TbSquareNumber2 />,
      title: "Program 2",
      description: "Hoffaz Dar Al-Arqam “Memorization”",
    },
    {
      id: 3,
      link: "/our-programs#program3",
      icon: <TbSquareNumber3 />,
      title: "Program 3",
      description: "Inheritors of the Prophets",
    },
  ];
  return (
    <section id='programs-section' className="programs-section">
      <div className="content-wrapper">
        <div className="image-section">
          <div className='before'></div>
          <img src={image} alt="Programs Image" />
        </div>
        <div className="text-section">
          <h2>
            Our Programs
            <span></span>
            <span></span>
          </h2>
          <div className="items">
            {programs.map(program => (
              <div className="item" key={program.id}>
                <HashLinkComponent link={program.link}>
                  {program.icon}
                  <div className='col'>
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                </HashLinkComponent>
              </div>
            ))}
          </div>
          <a href='/our-programs' className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
}
