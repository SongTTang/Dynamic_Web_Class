// component is obnly repsonsible for rendering out all todos as todo items
// AND passing props down to todoitem and todoedit
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const {todos, onDelete, onEdit} = props

  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
  ))

  return <div>{renderedTodos}</div>
}

export default TodoList
