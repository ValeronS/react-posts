import React from 'react'
import classes from './BaseInput.module.css'

const BaseInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.BaseInput} />
})

export default BaseInput
