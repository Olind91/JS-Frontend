import React, { useState } from 'react'
import Navbar from '../components/UniversalItems/Navbar';
import Showcase from '../components/Showcase';
import Support from '../components/Support';
import Footer from '../components/UniversalItems/Footer';
import FlashgridLeft from '../components/FlashgridLeft';
import FlashgridRight from '../components/FlashgridRight';
import Featured from '../components/Featured';
import DoubleImg from '../components/DoubleImg';




const HomeView = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, },
  ])


  return (
    <>
    <Navbar />
     <Showcase />
     <Featured title="Featured Products" products={products}/>
     <DoubleImg />
     <FlashgridLeft />
     <FlashgridRight />
     <Support />
     <Footer />
    </>
  )
}

export default HomeView