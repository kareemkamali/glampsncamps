import React from 'react'
import './Button.css';
const Button = (props) => {
  return (
  <button className='button-large'>
    {props.children}
  </button>
  )
}

export default Button