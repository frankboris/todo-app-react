import {
    ADD_TODO_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    SET_VISIBILITY_FILTER,
    SHOW_ALL,
    TOGGLE_TODO_FAILURE,
    TOGGLE_TODO_REQUEST,
    TOGGLE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS
} from '../constants/TodoActionTypes'

const initialState = {
    loading: false,
    todos: [],
    current_page: 0,
    last_page: 1,
    filter: SHOW_ALL,
    error: ''
}

const todoReducer = (state = initialState, action) => {
    let newTodos;
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload.data,
                current_page: action.payload.current_page,
                last_page: action.payload.last_page,
                error: ''
            };
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                todos: [],
                error: action.payload
            };
        case DELETE_TODO_REQUEST:
            return state;
        case DELETE_TODO_SUCCESS:
            newTodos = [...state.todos];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return {...state, todos: newTodos};
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case UPDATE_TODO_REQUEST:
            return state;
        case UPDATE_TODO_SUCCESS:
            newTodos = [...state.todos];
            let index = newTodos.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                newTodos[index] = action.payload;
                return {...state, todos: newTodos};
            } break
        case UPDATE_TODO_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case TOGGLE_TODO_REQUEST:
            return state;
        case TOGGLE_TODO_SUCCESS:
            newTodos = [...state.todos];
            let pos = newTodos.findIndex(todo => todo.id === action.payload);
            if (pos !== -1) {
                newTodos[pos] = {
                    ...newTodos[pos],
                    completed: !newTodos[pos].completed
                };
                return {...state, todos: newTodos};
            }
            break;
        case TOGGLE_TODO_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case ADD_TODO_REQUEST:
            return state;
        case ADD_TODO_SUCCESS:
            newTodos = [action.payload, ...state.todos];
            return {...state, todos: newTodos};
        case ADD_TODO_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
    return state;
}

export default todoReducer;