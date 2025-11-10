import { useState, useContext } from 'react'
import TodoContext from './context/todos'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import { Provider } from './context/todos'

const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
