import { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })
    e.preventDefault()
    setInput('')
  }
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  })
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter a todo'
        value={input} name='text'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm