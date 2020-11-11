import React, { useState } from 'react'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';

function TodoFilter({initFilter, appliedFilter}) {
    let [filter, setFilter] = useState(initFilter)

    const handleChange = (e) => {
        setFilter(e.target.value)
        appliedFilter(e.target.value)
    }

    return (
        <div className="text-center">
            <div className="custom-control custom-radio custom-control-inline">
                <input checked={filter === SHOW_ALL} value={SHOW_ALL} onChange={handleChange} type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline1">Toutes</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input checked={filter === SHOW_COMPLETED} value={SHOW_COMPLETED} onChange={handleChange} type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline2">Terminées</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
                <input checked={filter === SHOW_ACTIVE} value={SHOW_ACTIVE} onChange={handleChange} type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                <label className="custom-control-label" htmlFor="customRadioInline3">Encours</label>
            </div>
        </div>
    )
}

export default TodoFilter
