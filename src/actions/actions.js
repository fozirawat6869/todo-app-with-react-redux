import { ADD_TODO, REMOVE_TODO } from "../constants/constants";

export function addTodoActionCreator(todo){
    return{
        type:ADD_TODO,
        payload:todo
    }
}
export function removeTodoActionCreator(todoId){
    return{
        type:REMOVE_TODO,
        payload:todoId
    }
}