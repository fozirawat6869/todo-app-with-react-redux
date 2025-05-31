import { ADD_TODO, REMOVE_TODO } from "../../constants/constants"

const initialState={
    todos:[]
}

export function addTodoReducer(state=initialState,action){
    if(action.type===ADD_TODO){
        return{
            ...state,
            todos:[...state.todos,
                {
                    id:Date.now(),
                    text:action.payload,
                    complited:false
                }]
        }
    }
     if(action.type===REMOVE_TODO){
        return{
            ...state,
            todos:state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
    else{
        return state
    }
}


