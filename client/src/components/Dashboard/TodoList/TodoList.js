import React, { useState, useEffect } from 'react'
import { EditTodo } from './EditTodo'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    const response = await fetch('http://localhost:5000/dashboard')
    const data = await response.json()
    console.log(data)
    setTodos(data)
  }

  useEffect(() => {
    getTodos()
  }, [])

  const handleDelete = async id => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      })
      setTodos(prev => prev.filter(todo => todo.todo_id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <table className='table mt-5'>
      <thead>
        <tr>
          <th scope='col'>Description</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* {todos &&
          todos.length &&
          todos.map(todo => (
            <tr key={todo.todo_id}>
              <th scope='row'>{todo.description}</th>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => handleDelete(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
      </tbody>
    </table>
  )
}
