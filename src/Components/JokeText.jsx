import { useState } from 'react'
import '../styles/JokeText.css'

function JokeText(props) {


  return (
    <div className="JokeText">
        <p id={props.id}>{props.children}</p>
    </div>
  )
}

export default JokeText