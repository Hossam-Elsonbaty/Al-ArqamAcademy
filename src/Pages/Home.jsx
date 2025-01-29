import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import About from '../Components/About';
import OurPrograms from '../Components/OurPrograms';
import { GiftComponent } from '../Components/GiftComponent';
import image1 from '../Images/item1.webp';
import image2 from '../Images/item2.webp';
import image3 from '../Images/item3.webp';
import image4 from '../Images/Grey.webp';
import image5 from '../Images/PNG Blue vertical.webp';
import { Helmet } from 'react-helmet';
const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <link rel="preload" href={image1} as="image" />
        <link rel="preload" href={image2} as="image" />
        <link rel="preload" href={image3} as="image" />
        <link rel="preload" href={image4} as="image" />
        <link rel="preload" href={image5} as="image" />
      </Helmet>
      <Hero></Hero> 
      <About></About>
      <OurPrograms></OurPrograms>
      <GiftComponent></GiftComponent>
    </>
  )
}

export default Home;