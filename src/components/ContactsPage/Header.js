import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="contacts">
        <div className="container">
           <NavLink className="clink" to="/"><i className="fa-sharp fa-solid fa-house"></i><span>Contacts</span></NavLink>
        </div>
    </header>
  )
}

export default Header