import React from 'react'
import cl from './Loader.module.css'

const Loader = () => {
  return (
    <div className={cl.Loader}>
      <div className={cl.inner}></div>
    </div>
  )
}

export default Loader
