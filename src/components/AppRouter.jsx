import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import Navbar from './UI/navbar/Navbar'
import { AuthContext } from '../context'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) return

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {isAuth ? (
          <>
            {privateRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
            <Route path="*" element={<Navigate to="/posts" />} />
          </>
        ) : (
          <>
            {publicRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
