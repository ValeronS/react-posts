import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../router'
import Navbar from './UI/navbar/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
