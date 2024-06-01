import React from 'react'
import classes from './BaseSelect.module.css'

const BaseSelect = ({ options, defaultValue = 'Выбрать', value, onChange }) => {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classes.BaseSelect}
      >
        <option disabled>{defaultValue}</option>
        {options?.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BaseSelect
