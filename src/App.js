import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductContext } from './contexts/context';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import Shoppingcart from './views/Shoppingcart';
import ProductDetailsView from './views/ProductDetailsView';







function App() {
  
  

  const [products, setProducts] = useState({
    allProducts:[],
    featuredProducts:[],
    flashGridProducts:[],
    
  })
  
  useEffect (() => {
    
    const fetchAllProducts = async () => {
      let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, allProducts: await result.json()})
    }
    fetchAllProducts()
  
    
    const fetchFeaturedProducts = async () => {
      let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
      
    }
    fetchFeaturedProducts()
  
  
    const fetchFlashGridProducts = async () => {
      let result = await fetch ('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, flashGridProducts: await result.json()})
    }
    fetchFlashGridProducts()

   
 
 
  },[setProducts])
  
  
  
  return (
    
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView/>} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:articleNumber" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishlistView />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
     </BrowserRouter>
     
     
     
     
     
    
  );
}

export default App;
