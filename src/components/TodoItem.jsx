import React, {useState} from "react";
import PropTypes from "prop-types";

function TodoItem({todo, onUpdate, onDelete, onToggle}) {
    const [editable, setEditable] = useState(false);
    const [deleting, setDeleting] = useState(false);
    let [name, setName] = useState(todo.text);
    let [checked, setChecked] = useState(todo.completed);

    const handleEdit = () => {
        if (editable) {
            setName(todo.text);
            onUpdate({
                ...todo,
                text: name
            });
        }
        setEditable(!editable);
    };

    const handleCompleted = () => {
        setChecked(!checked);
        onToggle(todo.id);
    };

    const handleDelete = () => {
        setDeleting(true);
        onDelete(todo.id);
    };

    return (
        <div className="todo-item">
            <div className="row mx-0 align-items-center">
                <div className="custom-control custom-checkbox">
                    <input onChange={handleCompleted} checked={checked} type="checkbox" className="custom-control-input"
                           id={todo.id}/>
                    <label className="custom-control-label" htmlFor={todo.id}/>
                </div>
                <div className="col">
                    {editable ?
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control col"
                            type="text"/> :
                        <h4 className={checked ? "text-strike" : ""}>{todo.text}</h4>
                    }
                </div>
                <button
                    onClick={handleEdit}
                    className="btn btn-primary m-2"
                >{editable ? "Enregistrer" : "Modifier"}</button>
                <button
                    onClick={handleDelete}
                    className="btn btn-danger my-2"
                >{deleting ? "Suppresion..." : "Supprimer"}</button>
            </div>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
};

export default TodoItem;