import React, { useContext } from 'react'
import BaseInput from '../components/UI/input/BaseInput'
import { AuthContext } from '../context'
import BaseButton from '../components/UI/button/BaseButton'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true')
    navigate('/posts')
  }

  return (
    <div className="container">
      <h1>Вход в личный кабинет</h1>
      <form onSubmit={login}>
        <BaseInput type="text" placeholder="Логин" />
        <BaseInput type="password" placeholder="Пароль" />
        <BaseButton>Войти</BaseButton>
      </form>
    </div>
  )
}

export default Login
