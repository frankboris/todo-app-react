import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
    TODO_DATE_ASC,
    TODO_DATE_DESC,
    TODO_TITLE_ASC,
    TODO_TITLE_DESC
} from '../constants/contants';

function TodoFilter({filter, appliedStatusFilter, appliedOrderByFilter, appliedContentFilter}) {
    let [status, setStatus] = useState(filter.status);
    let [orderBy, setOrderBy] = useState(filter.order_by);
    let [content, setContent] = useState(filter.content);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        appliedStatusFilter(e.target.value);
    };

    const handleOrderByChange = (e) => {
        setOrderBy(e.target.value);
        appliedOrderByFilter(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
        appliedContentFilter(e.target.value);
    };

    return (
        <div className="row mt-4">
            <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="content">Contenu</label>
                    <input value={content} onChange={handleContentChange} id="content" type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="orderby">Trier par</label>
                    <select value={orderBy} onChange={handleOrderByChange} id="orderby" className="form-control">
                        <option value={TODO_TITLE_ASC}>Titre - A-Z</option>
                        <option value={TODO_TITLE_DESC}>Titre - Z-A</option>
                        <option value={TODO_DATE_DESC}>Plus récent</option>
                        <option value={TODO_DATE_ASC}>Plus ancien</option>
                    </select>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="status">Statut</label>
                    <select value={status} onChange={handleStatusChange} id="status" className="form-control">
                        <option value={SHOW_ALL}>Tous</option>
                        <option value={SHOW_COMPLETED}>Terminés</option>
                        <option value={SHOW_ACTIVE}>Encours</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

TodoFilter.propTypes = {
    filter: PropTypes.object,
    appliedStatusFilter: PropTypes.func,
    appliedOrderByFilter: PropTypes.func,
    appliedContentFilter: PropTypes.func
};

export default TodoFilter;
