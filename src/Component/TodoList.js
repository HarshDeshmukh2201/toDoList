import React from 'react'

export default function Todo(props) {
  return (
    <div >
      
      <p>{props.todos.describtion}</p>
      <p>{props.todos.status}</p>
      <button type="button" className="btn btn-danger  btn-sm" onClick={
        ()=>{props.ondelete(props.todos)}}>Delete</button>
      <br/>
        </div>
  )
}
