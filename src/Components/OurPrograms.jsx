import React, { useContext } from 'react';
import image from '../Images/item2.jpeg';
import { TbSquareNumber1, TbSquareNumber2, TbSquareNumber3 } from "react-icons/tb";
import IsDesktop from '../Context/IsDesktop';
// import Poster from 'https://s3-alpha-sig.figma.com/img/a2a5/39bd/d8cf38fab44d70581688c226544c2bec?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqQ9i2vaRCKW~YbCzyufHsDpIRhHz9Fuzo7BGpzTq6LuoYUa1zH5hVEUl2R9SQo4TFanFZlHJz6N6P2BTuCaJ8MIQd99TBZrPIXGvBTBCbyRo4TbaGKjZcDhvTbuDQPmLBc0DBsDl7c4MG4qfyi99o4VuGeCoW0AyZGak24CVhq7iLrOH0hcPaYAotZbh9M9EKF~CckaU6vfBI1dhJtiWXKeMTxTsNJDetLtxQb54WVnkKSBJVT26FWC0yHXtlCnkxiN4EJifAeI4Z84BnMAbx~gytnyGdm2gqAAOCgNVnU79PfT~B1V-2OkqEaoYFGeAPDjsruTF5UtEFGBfC3MHg__';
export default function OurPrograms() {
  const {isDesktop} = useContext(IsDesktop)
  return (
    <section class="programs-section">
      <div class="content-wrapper">
        <div class="image-section">
          <div className='before'></div>
          <img src={image}/>
        </div>
        <div class="text-section">
          <h2>
            Our Programs
            <span></span>
            <span></span>
          </h2>
          <div class="list">
            <div class="list-item">
              <TbSquareNumber1 />
              <div className='col'>
                <h3>Program   1</h3>
                <p>My first step in the Quran Journey</p>
              </div>
            </div>
            <div class="list-item">
              <TbSquareNumber2 />
              <div className='col'>
                <h3>Program   2</h3>
                <p>Hoffaz Dar Al-Arqam “Memorization”</p>
              </div>
            </div>
            <div class="list-item">
              <TbSquareNumber3 />
              <div className='col'>
                <h3>Program   3</h3>
                <p>Inheritors of the Prophet’s program</p>
              </div>
            </div>
          </div>
          <a href='/our-programs' class="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>
  )
}
