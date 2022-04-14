import React from 'react'

export default function Pokemon(props) {
  return (
    <div className="Pokemon">
      <div> {props.name} {props.hp} </div> 
      <img src={props.image} alt=""/> 
      <button onClick={props.handleAttack}>Attack!</button>


    </div>
  )
}
