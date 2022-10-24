import React from 'react'
import FlashSaleButton from './UniversalItems/FlashSaleButton'
import ProductCard from './UniversalItems/ProductCard'


const FlashgridLeft = ({flashProducts1}) => {
  return (
    <section className="flash-grid">
      <div className="container">
        <div className="flash-grid-box">
          <h1 className="flash-grid-title">2 FOR USD $29</h1>
            <FlashSaleButton/>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 g4">
          {
            flashProducts1.map(product => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </div>
    </section>
  )
}

export default FlashgridLeft