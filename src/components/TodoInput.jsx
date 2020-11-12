import React, { useState } from 'react'
import { addTodo } from '../actions/todosAction';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState('');
    let dispatch = useDispatch();

    const handleChange = (e) => setName(e.target.value)

    const handleAddBtnClick = () => {
        if (name.trim()) {
            dispatch(addTodo(name))
            setName('');
        }
    }

    const handleKeyDown = (e) => {
        // If the user pressed the Enter key:
        const trimmedText = name.trim()
        if (e.which === 13 && trimmedText) {
            dispatch(addTodo(trimmedText))
            setName('');
        }
    }

    return (
        <div>
            <div className="row m-0">
                <input
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={name}
                    type="text"
                    className="col form-control" />
                <button
                    onClick={handleAddBtnClick}
                    className="btn btn-primary ml-2"
                >Ajouter</button>
            </div>
        </div>
    )
}

export default TodoInput
