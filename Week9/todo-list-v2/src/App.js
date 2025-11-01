import {useState, useEffect} from 'react'
import axios from 'axios'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    // get the existing records from the database
    const response = await axios.get("http://localhost:3001/todos")
    // set them in local state
    setTodos(response.data)
  }

  // calling useEffect with an empty dependency array will only fire the function within
  // ONCE a component mount
  useEffect(() => {
    fetchTodos()
  },[])

  const createTodo = async (title) => {
    const response = await axios.post("http://localhost:3001/todos", {
      title,
    })

    // always use response.data when available to update state
    const updatedTodos = [
      ...todos,
     response.data
    ]
    // call our setter to update state with our new array
    setTodos(updatedTodos)
  }

  const deleteTodoById = async (id) => {
    // no need to store the response because there is no helpful data in it
    await axios.delete(`http://localhost:3001/todos/${id}`)
    // still have to delete from state in the app the same way, no response.data help
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    // call our setter to update state with our new array
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
    })
    // make a copy of our exxisting todos array and update the one value by id
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // the id matches! this is the one to update
        return {...todo, ...response.data}
      }
      return todo
    })
    // call our setter to update state with our new array
    setTodos(updatedTodos)
  }

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  )
}

export default App
