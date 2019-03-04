import React from 'react'
import './pageContainer.css'
import '../global.css'

export const PageContainer = ({ children, customClass }) => {
  return (
    <div
      className={
        customClass ? `${customClass} page_container` : 'page_container'
      }
    >
      {children}
    </div>
  )
}
