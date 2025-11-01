import {useState} from 'react'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const [showEdit, setShowEdit] = useState(false)
  const {todo, onDelete, onEdit} = props

  const handleDelete = () => {
    onDelete(todo.id)
  }

  // this handle edit is only responsible for showing the edittodo component or the todoitem component
  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  // tricky part here is onEDIT is called onSUBMIT
  // so to avoid confusion in our EditTodo, we will call the prop onSubmit
  // because it is called when a user submits a form
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle)
    setShowEdit(false)
  }

  let content = (
    <div>
      {todo.title}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShowEdit}>Edit</button>
    </div>
  )
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return <div>{content}</div>
}

export default TodoItem
