/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationTo = (props) => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(props.href)
  }

  return (
    <a
      {...props}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    />
  )
}

export default NavigationTo
