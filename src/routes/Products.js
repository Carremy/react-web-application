import React from 'react'
import Navbar from '../components/Navbar'

import HeroSection2 from '../components/HeroSection2';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import ServiceCard from '../components/ServiceCard';


const Products = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="PRODUCTS AND SERVICES" text=" Check it out"/>
      <PricingCard/>
      <ServiceCard/>
      <Footer/>
    </div>
  )
}

export default Products