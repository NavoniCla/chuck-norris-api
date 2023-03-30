import { useState } from 'react'
import '../styles/Title.css'

function Title(props) {

  return (
    <div className="Title">
      <p>{props.children}</p>
    </div>
  )
}

export default Title