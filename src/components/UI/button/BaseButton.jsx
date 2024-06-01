import React from 'react'
import classes from './BaseButton.module.css'

const BaseButton = ({ children, ...props }) => {
  const rootClasses = [classes.BaseBtn]
  if (props.disabled) rootClasses.push(classes.disabled)

  return (
    <button {...props} className={rootClasses.join(' ')}>
      {children}
    </button>
  )
}

export default BaseButton
