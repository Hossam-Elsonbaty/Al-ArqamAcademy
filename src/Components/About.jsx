import React from 'react';
import image from '../Images/item1.jpeg';
import { FaCheckCircle } from "react-icons/fa";
// import Poster from 'https://s3-alpha-sig.figma.com/img/a2a5/39bd/d8cf38fab44d70581688c226544c2bec?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqQ9i2vaRCKW~YbCzyufHsDpIRhHz9Fuzo7BGpzTq6LuoYUa1zH5hVEUl2R9SQo4TFanFZlHJz6N6P2BTuCaJ8MIQd99TBZrPIXGvBTBCbyRo4TbaGKjZcDhvTbuDQPmLBc0DBsDl7c4MG4qfyi99o4VuGeCoW0AyZGak24CVhq7iLrOH0hcPaYAotZbh9M9EKF~CckaU6vfBI1dhJtiWXKeMTxTsNJDetLtxQb54WVnkKSBJVT26FWC0yHXtlCnkxiN4EJifAeI4Z84BnMAbx~gytnyGdm2gqAAOCgNVnU79PfT~B1V-2OkqEaoYFGeAPDjsruTF5UtEFGBfC3MHg__';
export default function About() {
  return (
    <section class="about-section">
      <div class="content-wrapper">
        <div class="text-section">
          <h2>
            About Al-Arqam Academy
            <span></span>
            <span></span>
          </h2>
          <p>
            Al-Arqam Academy aims to make Shariah studies accessible by providing young Muslims with knowledge based on the Quran and Sunnah. The program emphasizes a modern, practical approach while staying true to the understanding of the righteous predecessors.
          </p>
          <div class="list">
            <div class="list-item">
              <FaCheckCircle/> Objectives of Al-Arqam Academy
            </div>
            <div class="list-item">
              <FaCheckCircle/> How Al-Arqam accomplish goals?
            </div>
            <div class="list-item">
              <FaCheckCircle/> Graduates of Al-Arqam Academy
            </div>
            <div class="list-item">
              <FaCheckCircle/> Our Team
            </div>
          </div>
          <a href='/about-us' class="learn-more-btn">Learn More</a>
        </div>
        <div class="image-section">
          <div className='before'></div>
          <img src={image}/>
        </div>
      </div>
    </section>
  )
}
