
import { addTodoReducer } from './reducers/addReducer'
import { removeTodoReducer } from './reducers/removeReducer'
import { combineReducers ,createStore} from 'redux'

const rootReducer=combineReducers({
    addTodo:addTodoReducer})
 const store=createStore(rootReducer)
 export default store
