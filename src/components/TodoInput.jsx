import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoActionCreator } from "../actions/actions";


function TodoInput() {
    const dispatch=useDispatch();
    const [todo,setTodo]=useState('')

     function adding(){
        if(todo==''){
            alert("type something to add in todo list");
            return
        }
        dispatch(addTodoActionCreator(todo))
        setTodo('')
    }
  return (
   
    <>
    <div className="flex flex-col justify-center items-center">
       <div className="mb-5"> <h1 className="font-bold text-2xl">TODO APPLICATION</h1></div>
     <div>
     <input className="border-2 border-solid rounded-[10px] mr-5 pl-3 w-[250px] p-1" type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
     <button className="border-1 border-solid p-1 rounded-[10px] cursor-pointer" onClick={adding}>Add Todo</button>
     </div>
     </div>
    </>
  )
}

export default TodoInput