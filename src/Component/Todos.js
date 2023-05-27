import React from 'react'
import TodoList from "../Component/TodoList"
export default function Todos(props) {
  return (

    <div className='container'>
        <h1>Todos list</h1>{props.TODOS.length === 0 ? <h1>"NO TODO LIST"</h1> :  props.TODOS.map((todos) => {
        return  <TodoList todos={todos} key={todos.id} ondelete={props.ondelete}/>
      })}

    </div>
   

  )
}
