import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {appliedContentFilter, appliedOrderByFilter, appliedStatusFilter, fetchTodos} from '../actions/todo.action';
import React, {useEffect} from 'react';
import TodoFilter from '../components/TodoFilter';

const mapStateToProps = (state) => ({
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch) => ({
    appliedStatusFilter: filter => dispatch(appliedStatusFilter(filter)),
    appliedOrderByFilter: filter => dispatch(appliedOrderByFilter(filter)),
    appliedContentFilter: filter => dispatch(appliedContentFilter(filter)),
});

function TodoFilterContainer({filter, appliedStatusFilter, appliedOrderByFilter, appliedContentFilter}) {
    useEffect(() => {
        fetchTodos(filter, 1);
    }, [filter]);
    return <TodoFilter appliedStatusFilter={appliedStatusFilter} appliedContentFilter={appliedContentFilter}
                       appliedOrderByFilter={appliedOrderByFilter} filter={filter}/>;
}

TodoFilterContainer.propTypes = {
    filter: PropTypes.object,
    appliedStatusFilter: PropTypes.func,
    appliedContentFilter: PropTypes.func,
    appliedOrderByFilter: PropTypes.func,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilterContainer);