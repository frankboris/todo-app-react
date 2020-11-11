import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    const {todos, deleteTodo, toggleTodo, updateTodo} = props;
    return (
        <div className="my-4">
            {todos.map(todo => {
                return <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onDelete={deleteTodo}
                            onToggle={toggleTodo}
                            onUpdate={updateTodo}
                        />
            })}
        </div>
    )
}

export default TodoList;
