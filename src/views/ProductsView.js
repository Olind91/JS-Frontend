import React, { useContext } from 'react'
import Featured from '../components/Featured';
import Navbar from '../components/UniversalItems/Navbar';
import { ProductContext } from '../contexts/context';

const ProductsView = () => {

  const productContext = useContext(ProductContext)





  return (
    <>
    <Navbar />
    <Featured title="All Products" items={productContext.allProducts}/>
    </>
  )
}

export default ProductsView