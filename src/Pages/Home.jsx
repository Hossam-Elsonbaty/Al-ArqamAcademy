import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import { Footer } from '../Components/Footer';
import About from '../Components/About';
import OurPrograms from '../Components/OurPrograms';
import { GiftComponent } from '../Components/GiftComponent';
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
      <Hero></Hero> 
      <About></About>
      <OurPrograms></OurPrograms>
      <GiftComponent></GiftComponent>
    </>
  )
}

export default Home;