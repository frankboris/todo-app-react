import React, {useState} from 'react'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoActionTypes';

function TodoFilter({initFilter, appliedFilter}) {
    let [filter, setFilter] = useState(initFilter)

    const handleChange = (e) => {
        setFilter(e.target.value)
        appliedFilter(e.target.value)
    }

    return (
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="content">Contenu</label>
                    <input id="content" type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="status">Statut</label>
                    <select value={filter} onChange={handleChange} id="status" className="form-control">
                        <option value={SHOW_ALL}>Tous</option>
                        <option value={SHOW_COMPLETED}>Terminés</option>
                        <option value={SHOW_ACTIVE}>Encours</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TodoFilter
