import axios from 'axios'
import * as types from '../constants/TodoActionTypes'

export const addTodo = (text) => {
    return (dispatch) => {
        dispatch(addTodoRequest())
        axios
            .post(`http://localhost/BlogReact/public/api/v1/todos/create`, {text: text})
            .then(response => {
                dispatch(addTodoSuccess(response.data))
            })
            .catch(error => {
                dispatch(addTodoFailure(error.message))
            })
    }
}

export const deleteTodo = (todoId) => {
    return (dispatch) => {
        dispatch(deleteTodoRequest())
        axios
            .delete(`http://localhost/BlogReact/public/api/v1/todos/${todoId}/destroy`)
            .then(response => {
                dispatch(deleteTodoSuccess(response.data))
            })
            .catch(error => {
                dispatch(deleteTodoFailure(error.message))
            })
    }
}

export const toggleTodo = (todoId) => {
    return (dispatch) => {
        dispatch(toggleTodoRequest())
        axios
            .post(`http://localhost/BlogReact/public/api/v1/todos/${todoId}/toggle`)
            .then(response => {
                dispatch(toggleTodoSuccess(response.data))
            })
            .catch(error => {
                dispatch(toggleTodoFailure(error.message))
            })
    }
}

export const updateTodo = (todo) => {
    return (dispatch) => {
        dispatch(updateTodoRequest())
        axios
            .put(`http://localhost/BlogReact/public/api/v1/todos/${todo.id}/update`, {text: todo.text})
            .then(response => {
                dispatch(updateTodoSuccess(response.data))
            })
            .catch(error => {
                dispatch(updateTodoFailure(error.message))
            })
    }
}

export const fetchTodosRequest = () => {
    return {
        type: types.FETCH_TODOS_REQUEST
    }
}

export const fetchTodosSuccess = todos => {
    return {
        type: types.FETCH_TODOS_SUCCESS,
        payload: todos
    }
}

export const fetchTodosFailure = error => {
    return {
        type: types.FETCH_TODOS_FAILURE,
        payload: error
    }
}

export const deleteTodoRequest = () => {
    return {
        type: types.DELETE_TODO_REQUEST
    }
}

export const deleteTodoSuccess = todoId => {
    return {
        type: types.DELETE_TODO_SUCCESS,
        payload: todoId
    }
}

export const deleteTodoFailure = error => {
    return {
        type: types.DELETE_TODO_FAILURE,
        payload: error
    }
}

export const updateTodoRequest = () => {
    return {
        type: types.UPDATE_TODO_REQUEST
    }
}

export const updateTodoSuccess = todo => {
    return {
        type: types.UPDATE_TODO_SUCCESS,
        payload: todo
    }
}

export const updateTodoFailure = error => {
    return {
        type: types.TOGGLE_TODO_FAILURE,
        payload: error
    }
}

export const toggleTodoRequest = () => {
    return {
        type: types.TOGGLE_TODO_REQUEST
    }
}

export const toggleTodoSuccess = todo => {
    return {
        type: types.TOGGLE_TODO_SUCCESS,
        payload: todo
    }
}

export const toggleTodoFailure = error => {
    return {
        type: types.UPDATE_TODO_FAILURE,
        payload: error
    }
}

export const addTodoRequest = () => {
    return {
        type: types.ADD_TODO_REQUEST
    }
}

export const addTodoSuccess = todo => {
    return {
        type: types.ADD_TODO_SUCCESS,
        payload: todo
    }
}

export const addTodoFailure = error => {
    return {
        type: types.ADD_TODO_FAILURE,
        payload: error
    }
}

export const appliedFilter = (filter) => ({
    type: types.SET_VISIBILITY_FILTER,
    filter: filter
})

export const fetchTodos = (filter, page) => {
    return (dispatch) => {
        dispatch(fetchTodosRequest())
        axios
            .get(`http://localhost/BlogReact/public/api/v1/todos?page=${page}&filter=${filter}`)
            .then(response => {
                dispatch(fetchTodosSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchTodosFailure(error.message))
            })
    }
}
