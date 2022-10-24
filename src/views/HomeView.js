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

  const [featProducts, featSetProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8125856/pexels-photo-8125856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern White Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/12454036/pexels-photo-12454036.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Red Shirt", category: "Fashion", price: "$25.00", rating: 5, img: "https://images.pexels.com/photos/5996938/pexels-photo-5996938.png?auto=compress&cs=tinysrgb&w=1600"},
    { id: 4, name: "Modern Red Hoodie", category: "Fashion", price: "$55.00", rating: 5, img: "https://images.pexels.com/photos/9704405/pexels-photo-9704405.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 5, name: "Modern Denim Jacket", category: "Fashion", price: "$40.00", rating: 5, img: "https://images.pexels.com/photos/2801756/pexels-photo-2801756.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 6, name: "Modern Blue Jeans", category: "Fashion", price: "$60.00", rating: 5, img: "https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 7, name: "Modern Beige Coat", category: "Fashion", price: "$80.00", rating: 5, img: "https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 8, name: "Modern Brown Scarf", category: "Fashion", price: "$15.00", rating: 5, img: "https://images.pexels.com/photos/3781538/pexels-photo-3781538.jpeg?auto=compress&cs=tinysrgb&w=1600"},
  ])

  const [flashProducts1, flashSetProducts1] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8125856/pexels-photo-8125856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern White Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/12454036/pexels-photo-12454036.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Red Shirt", category: "Fashion", price: "$25.00", rating: 5, img: "https://images.pexels.com/photos/5996938/pexels-photo-5996938.png?auto=compress&cs=tinysrgb&w=1600"},
    { id: 4, name: "Modern Red Hoodie", category: "Fashion", price: "$55.00", rating: 5, img: "https://images.pexels.com/photos/9704405/pexels-photo-9704405.jpeg?auto=compress&cs=tinysrgb&w=1600"},

  ])

  const [flashProducts2, flashSetProducts2] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/8125856/pexels-photo-8125856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern White Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/12454036/pexels-photo-12454036.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Red Shirt", category: "Fashion", price: "$25.00", rating: 5, img: "https://images.pexels.com/photos/5996938/pexels-photo-5996938.png?auto=compress&cs=tinysrgb&w=1600"},
    { id: 4, name: "Modern Red Hoodie", category: "Fashion", price: "$55.00", rating: 5, img: "https://images.pexels.com/photos/9704405/pexels-photo-9704405.jpeg?auto=compress&cs=tinysrgb&w=1600"},

  ])
  


  return (
    <>
    <Navbar />
     <Showcase />
     <Featured title="Featured Products" featProducts={featProducts}/>
     <DoubleImg />
     <FlashgridLeft title="Flash sale" flashProducts1={flashProducts1}/>
     <FlashgridRight title="Flash sale" flashProducts2={flashProducts2}/>
     <Support />
     <Footer />
    </>
  )
}

export default HomeView