import { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'



function TodoList(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;

    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos)
    console.log(...todos, 'aaa')
  };
  const completeTodo = (id) => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todos
    })
    setTodos(updateTodos)
  }
  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }
  





  return (
    <div>
      <h1>Whats the plane for today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList