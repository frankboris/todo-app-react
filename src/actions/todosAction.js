import * as types from '../constants/TodoActionTypes'

export const addTodo = (text) => ({
    type: types.ADD_TODO,
    payload: text
})

export const deleteTodo = (todoId) => ({
    type: types.DELETE_TODO,
    payload: todoId
})

export const toggleTodo = (todoId) => ({
    type: types.TOGGLE_TODO,
    payload: todoId
})

export const updateTodo = (todo) => ({
    type: types.UPDATE_TODO,
    payload: todo
})
