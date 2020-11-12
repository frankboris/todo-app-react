import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todosData, deleteTodo, toggleTodo, updateTodo}) {
    return (
        <div className="mt-2 mb-4">
            {
                todosData.loading ? <h2>Loading</h2> :
                todosData.todos.map(todo => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                        onToggle={toggleTodo}
                        onUpdate={updateTodo}
                    />
                })
            }
        </div>
    )
}

export default TodoList;
