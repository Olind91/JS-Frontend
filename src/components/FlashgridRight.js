import React from 'react'
import FlashSaleButton from './UniversalItems/FlashSaleButton'
import ProductCard from './UniversalItems/ProductCard'
import imgFlashR from '../assets/images/8.png'

const FlashgridRight = ({items = []}) => {

  

  return (
    <section className="flash-grid">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g4">
              {
                items.map(product => <ProductCard key={product.articleNumber} item={product} />)
              }
            </div>
            
            <div className="flash-grid-box">
            <img src={imgFlashR} className="img-left"></img>
              <h1 className="flash-grid-title">2 FOR USD $29</h1>
              <FlashSaleButton/>
            </div>
        </div>
        
    </section>
  )
}

export default FlashgridRight