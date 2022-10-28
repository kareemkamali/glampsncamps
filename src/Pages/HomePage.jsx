import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs'
import Adventure from '../components/Adventure/Adventure'
import Categories from '../components/Categories/Categories'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/shared/Footer/Footer'
import Header from '../components/shared/Navbar/Header'

const HomePage = () => {
  return (
    <>
    <Header/>
  <HeroSection/>
  <Adventure/>
  <Categories/>
  <AboutUs/>
  <Footer/>
  </>
  )
}

export default HomePage