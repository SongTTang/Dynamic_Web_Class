import { createContext, useState, useCallback } from "react";
import axios from 'axios'


const TodoContext = createContext()

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const fetchTodos = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/todos")
    setTodos(response.data)
  }, [])

  // telling react that fetch todos is this ONE SINGLE STABLE ALWAYS IN THE SAME SLOT IN MEMORY FetchTodos
  // const stableFetchTodos = useCallback(fetchTodos, [])

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
        return { ...todo, ...response.data }
      }
      return todo
    })
    // call our setter to update state with our new array
    setTodos(updatedTodos)
  }

  const valueToShare = {
    todos,
    fetchTodos,
    createTodo,
    deleteTodoById,
    editTodoById,
  }

  return (
    <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>
  )
}

export default TodoContext