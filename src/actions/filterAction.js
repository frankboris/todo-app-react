import * as types from '../constants/TodoFilters'

export const appliedFilter = (filter) => ({
    type: types.SHOW_ALL,
    filter: filter
})

export const showAll = () => ({
    type: types.SHOW_ALL,
    filter: types.SHOW_ALL
})

export const showCompleted = () => ({
    type: types.SHOW_COMPLETED,
    filter: types.SHOW_COMPLETED
})

export const showActive = () => ({
    type: types.SHOW_ACTIVE,
    filter: types.SHOW_ACTIVE
})
