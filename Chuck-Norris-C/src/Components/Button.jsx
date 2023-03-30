import { useState } from 'react'
import '../styles/Button.css'

function Button(props) {

  function defaultCallback(){
  }

  function onBtnClick(){
    if(props.callback && props.variant!=="disabled"){
      props.callback();
    }else{
      defaultCallback();
    }
  }

  return (
    <div className={"Button"}>
        <button className={"Button" + (props.variant!==undefined ? " disabled" : "")} id={props.id} onClick={onBtnClick}>{props.children}</button>
    </div>
  )
}

export default Button
