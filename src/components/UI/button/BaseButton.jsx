import React from 'react'
import classes from './BaseButton.module.css'

const BaseButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.BaseBtn}>
      {children}
    </button>
  )
}

export default BaseButton
