import { useState } from "react"
import TodoForm from "./TodoForm"
import { IoIosCloseCircle } from 'react-icons/io'
import { TiEdit } from 'react-icons/ti'


function Todo({ todos, completeTodo, removeTodo,updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })
  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }
  if (edit.id) {
    return <TodoForm onSubmit={submitUpdate} edit={edit} />
  }


  return todos.map((todo, index) => (
    <div className={todo.isCompleted ? 'todo-row complited' :
      'todo-row'} key={index}>
      <div className={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <IoIosCloseCircle
          onClick={() => removeTodo(todo.id)}
          className='delete-icon' />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ))


}
export default Todo