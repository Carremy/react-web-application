import React from 'react';
import Footer from '../components/Footer';
import HeroSection2 from '../components/HeroSection2';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
const Contacts = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="CONTACT" text=" Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Contacts