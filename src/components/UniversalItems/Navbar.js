import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    
    <nav className="Navbar">
      
      <NavLink className="Fixxo" to="/" end>Fixxo.</NavLink>
      <div className="directory">
          <NavLink className="Navigation" to="/" end>Home</NavLink>
          <NavLink className="Navigation" to="/categories" end>Categories</NavLink>
          <NavLink className="Navigation" to="/products" end>Products</NavLink>
          <NavLink className="Navigation" to="/contacts" end>Contacts</NavLink>
      </div>
      
      <div className="navlinks">
        <NavLink to="/search"><i className="fa-regular fa-magnifying-glass" end></i></NavLink>
        <NavLink to="/compare"><i className="fa-light fa-arrows-retweet" end></i></NavLink>
        <NavLink to="/wishlist"><i className="fa-light fa-heart" end></i></NavLink>
        <NavLink to="/shoppingcart"><i className="fa-light fa-bag-shopping" end></i></NavLink>
      </div>
      
    </nav>
    
  )
}

export default Navbar