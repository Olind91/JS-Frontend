import React, { useContext } from 'react'
import Featured from '../Sections/Featured';
import Navbar from '../components/UniversalItems/Navbar';
import { ProductsContext } from '../contexts/context';

const ProductsView = () => {

  const products = useContext(ProductsContext)





  return (
    <>
    <Navbar />
    <Featured title="All Products" items={products}/>
    </>
  )
}

export default ProductsView