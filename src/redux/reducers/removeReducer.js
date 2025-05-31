import { REMOVE_TODO } from "../../constants/constants"

const initialState={
    todos:[]
}

export function removeTodoReducer(state=initialState,action){
    if(action.type===REMOVE_TODO){
        return{
            ...state,
            todos:state.todos.filter(todo=>todo.id!==action.payload)
        }
    }else{
        return state
    }
}