import { SHOW_ALL } from "../constants/TodoFilters";

export const todos = [
    {
        id: 1,
        text: 'Apprendre à utiliser Redux.',
        completed: false,
    },
    {
        id: 2,
        text: 'Savoir quand est-ce que nous pouvons utiliser Redux.',
        completed: true,
    },
    {
        id: 3,
        text: 'Apprendre à utiliser React.',
        completed: false,
    }
]

export const initialState = {
    todos: todos,
    filter: SHOW_ALL
}
