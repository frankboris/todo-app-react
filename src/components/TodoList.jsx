import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import { getVisibleTodos } from '../selectors'

function TodoList() {
    let todos = useSelector(getVisibleTodos)
    return (
        <div className="my-4">
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </div>
    )
}

export default TodoList;
