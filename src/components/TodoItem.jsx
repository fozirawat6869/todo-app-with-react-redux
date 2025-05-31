import React from 'react'
import TodoInput from './TodoInput'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodoActionCreator } from '../actions/actions';

function TodoItem({id,text,iscomplited}) {
  
    const dispatch=useDispatch();
    function remove(){
        dispatch(removeTodoActionCreator(id))
    }
  return (
    <>
     <div className=' flex justify-start pl-10 '>
         {/* <div><input type="checkbox" checked={iscomplited}  /></div> */}
         <div>
        <p>{text}</p>
        <button className=' border-1 border-solid p-1 rounded-[3px] cursor-pointer' onClick={remove}>X</button>
        </div>
     </div>
    </>
  )
}

export default TodoItem