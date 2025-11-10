import { useState, useEffect, useContext } from 'react'
import useTodoContext from './hooks/use-todo-context'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  const { fetchTodos } = useTodoContext()

  useEffect(() => {
    fetchTodos()
  }, [])


  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
