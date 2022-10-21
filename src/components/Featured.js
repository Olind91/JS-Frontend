import React from 'react'
import ProductCard from '../components/UniversalItems/ProductCard';

const Featured = ({title, products}) => {

  

  return (
    <section className="featured">
        <div className="container">
            <h5 className="f-title">{title}</h5>
            <div className="row row-cols-1 row-cols-md-4 g4">
                {
                  products.map(product => <ProductCard key={product.id} product={product} />)
                }
                
            </div>
        </div>
    </section>
  )
}

export default Featured