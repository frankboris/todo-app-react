import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/todosAction';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    let [name, setName] = useState(todo.text)
    let [checked, setChecked] = useState(todo.completed)
    let dispatch = useDispatch();

    const handleEdit = () => {
        if(editable) {
            setName(todo.text)
            dispatch(updateTodo({
                ...todo,
                text: name
            }))
        }
        setEditable(!editable)
    }

    const handleCompleted = () => {
        setChecked(!checked)
        dispatch(updateTodo({
            ...todo,
            completed: !checked
        }))
    }

    const handleDelete = () => dispatch(deleteTodo(todo.id))

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div className="custom-control custom-checkbox">
                    <input onChange={handleCompleted} checked={checked} type="checkbox" className="custom-control-input" id={todo.id} />
                    <label className="custom-control-label" htmlFor={todo.id}/>
                </div>
                <div>#{todo.id}</div>
                <div className="col">
                    {editable ?
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control col"
                            type="text" /> :
                        <h4>{todo.text}</h4>
                    }
                </div>
                <button
                    onClick={handleEdit}
                    className="btn btn-primary m-2"
                >{editable ? 'Enregistrer' : 'Modifier'}</button>
                <button
                    onClick={handleDelete}
                    className="btn btn-danger m-2"
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;