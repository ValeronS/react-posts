import React from 'react'
import cl from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={cl.Navbar}>
      <Link to="/about" className={cl.Links}>
        О сайте
      </Link>
      <Link to="/posts" className={cl.Links}>
        Посты
      </Link>
    </div>
  )
}

export default Navbar
