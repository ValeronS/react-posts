import React from 'react'
import cl from './BaseModal.module.css'

const BaseModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.BaseModal]
  if (visible) rootClasses.push(cl.active)

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.BaseModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default BaseModal
