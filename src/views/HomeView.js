import React from 'react'
import Navbar from '../components/UniversalItems/Navbar';
import Showcase from '../components/Showcase';
import Support from '../components/Support';
import Footer from '../components/UniversalItems/Footer';
import FlashgridLeft from '../components/FlashgridLeft';
import FlashgridRight from '../components/FlashgridRight';
import Featured from '../components/Featured';
import DoubleImg from '../components/DoubleImg';



const HomeView = () => {
  return (
    <>
    <Navbar />
     <Showcase />
     <Featured title="Featured Products"/>
     <DoubleImg />
     <FlashgridLeft />
     <FlashgridRight />
     <Support />
     <Footer />
    </>
  )
}

export default HomeView