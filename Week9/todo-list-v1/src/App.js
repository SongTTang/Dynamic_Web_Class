import {useState} from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    // NO
    // todos.push({title: title})
    // make a new copy of existing todos and add a new one to the end
    const updatedTodos = [
      ...todos,
      {title, id: Math.round(Math.random() * 9999)},
    ]
    // call our setter to update state with our new array
    setTodos(updatedTodos)
  }

  const dfeleteTodoById = (id) => {
    // filter will return each todo where the statement within the function is truthy
    // filter does not mutate the original todos, it returns a copy with the one whos id matched
    // filtered out
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    // call our setter to update state with our new array
    setTodos(updatedTodos)
  }

  const editTodoById = (id, newTitle) => {
    // make a copy of our exxisting todos array and update the one value by id
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // the id matches! this is the one to update
        return {...todo, title: newTitle}
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
