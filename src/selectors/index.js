import { createSelector } from 'reselect'

import {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
} from '../constants/TodoFilters'

export const getVisibilityFilter = (state) => state.filter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (filter, todos) => {
        switch (filter) {
            case SHOW_ALL:
                return todos
            case SHOW_COMPLETED:
                return todos.filter((t) => t.completed)
            case SHOW_ACTIVE:
                return todos.filter((t) => !t.completed)
            default:
                throw new Error(`Unknown filter:${filter}`)
        }
    },
)