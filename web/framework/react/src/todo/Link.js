import React from 'react'
import Todo from './Todo'

export default function Link(props) {
  const { active, children, onClick } = props;
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}
