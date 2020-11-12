import {
    ADD_TODO_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS, SET_CONTENT_FILTER, SET_ORDER_BY_FILTER,
    SET_STATUS_FILTER,
    TOGGLE_TODO_FAILURE,
    TOGGLE_TODO_REQUEST,
    TOGGLE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS
} from '../constants/todo.action.types';
import {SHOW_ALL, TODO_TITLE_ASC} from '../constants/contants';

const initialState = {
    loading: false,
    todos: [],
    current_page: 0,
    hasMore: false,
    filter: {
        status: SHOW_ALL,
        order_by: TODO_TITLE_ASC,
        content: ''
    },
    error: ''
};

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
                hasMore: action.payload.current_page < action.payload.last_page,
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
            }
            break;
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
        case SET_STATUS_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.filter
                }
            };
        case SET_ORDER_BY_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    order_by: action.filter
                }
            };
        case SET_CONTENT_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    content: action.filter
                }
            };
        default:
            return state;
    }
    return state;
};

export default todoReducer;