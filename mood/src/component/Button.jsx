import React from 'react'

function Button({children,
  type = 'button',
  bgColor = 'blue',
  textColor = "white",
  className ='',
  ...props}) {
  

  return (
   <button className={`${bgColor} ${textColor} ${className}`} {...props}>
    {children}
   </button>
  )
}

export default Button