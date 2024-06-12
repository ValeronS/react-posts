import React, { useContext } from 'react'
import cl from './Navbar.module.css'
import { Link } from 'react-router-dom'
import BaseButton from '../button/BaseButton'
import { AuthContext } from '../../../context'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const handleLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }

  return (
    <div className={cl.Navbar}>
      {isAuth && <BaseButton onClick={handleLogout}>Выйти</BaseButton>}

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
