import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"


function TodoList() {
    const todos=useSelector(state=>state.addTodo.todos)
  return (
    <>
    <div className="grid grid-cols-4 gap-5 mt-5">
    {todos.map((todoItem)=><TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} iscomplited={todoItem.iscomplited}  />)}
    </div>
    </>

  )
}



export default TodoList