import { createContext, useState, useCallback } from "react";

const TodoContext = createContext()

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    const newTodo = {
      id: Math.round(Math.random() * 9999),
      title
    }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
  }

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, title: newTitle}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{todos, createTodo, deleteTodoById, editTodoById}}>
      {children}
    </TodoContext.Provider>
  )
}

export {Provider}
export default TodoContext