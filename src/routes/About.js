import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroSection2 from '../components/HeroSection2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection2 heading ="ABOUT."text="A Friendly Software Company"/>
        <AboutContent/>
        <Footer/>

    </div>
  )
}

export default About