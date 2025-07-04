import React from 'react'
import NavBar from './Navbar/NavBar'
import Hero from './Hero/Hero'
import Products from './Hero/Products/Products'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './Hero/TopProducts.jsx/TopProducts';
import Banner from './Hero/Banner/Banner';
import Subscribe from './Hero/Banner/Subscribe/Subscribe';
import Testimonals from './Hero/Testimonials/Testimonals';
import Footer from './Hero/Footer/Footer';

function App () {
  React.useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      delay:100,
      easing:"ease-in-out", // Animation only happens once
    });
    AOS.refresh();
  },[]);

  return (
    <div className=''>
      <NavBar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Testimonals/>
      <Footer/>
    </div>
  )
}

export default App