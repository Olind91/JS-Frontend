import React from 'react'
import img1 from '../assets/images/img-1.svg'
import img2 from '../assets/images/img-2.svg'
import ShopNowButton from './UniversalItems/ShopNowButton'

const Showcase = () => {
  return (
    <section className ="Showcase">
        <div className="container">
            <img src={img2} className="img-left"></img>
            
            <div className="showcase-text">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <ShopNowButton/>
            </div>
            
            <img src={img1} className="img-right"></img>
            
        </div>
    </section>
  )
}

export default Showcase