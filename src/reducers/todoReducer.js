import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants/TodoActionTypes'
import { todos } from './todos'

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

const todoReducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push({
                id: nextTodoId(state),
                text: action.payload,
                completed: false
            });
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
        case TOGGLE_TODO:
            newTodos = [...state];
            let pos = newTodos.findIndex(todo => todo.id === action.payload);
            if (pos !== -1) {
                newTodos[pos] = {
                    ...newTodos[pos],
                    completed: !newTodos[pos].completed
                };
                return newTodos;
            }
            break;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = newTodos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            break;
        default:
            return state;
    }
    return state;
}

export default todoReducer;