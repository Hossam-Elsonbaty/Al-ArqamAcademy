import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../Components/Hero';
import { Accomplishes } from '../Components/Accomplishes';
import { Objectives } from '../Components/Objectives';
import { Programs } from '../Components/Programs';
import  Poster  from '../Components/Poster';
import { OurTeam } from '../Components/OurTeam';
import { Footer } from '../Components/Footer';
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
      <Objectives></Objectives>
      <Accomplishes></Accomplishes>
      <Poster></Poster>
      <Programs></Programs>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </>
  )
}

export default Home;