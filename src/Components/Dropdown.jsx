import { useState } from 'react'
import '../styles/Dropdown.css'

function Dropdown(props) {

  return (
    <div className="Dropdown">
        <select id={props.id}>
        {props.values.map((el,index)=> {return <option value={el} key={index}>{el}</option>})}
        </select>
    </div>
  )
}

export default Dropdown
