import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import {
    updateTodo,
    deleteTodo,
    toggleTodo,
    fetchTodos,
    appliedStatusFilter,
    appliedOrderByFilter, appliedContentFilter
} from '../actions/todosAction';
import React, {Fragment, useEffect} from 'react';
import TodoFilter from '../components/TodoFilter';

const mapStateToProps = (state) => ({
    todosData: state.todos,
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: todo => dispatch(updateTodo(todo)),
    fetchTodos: (filter, page) => dispatch(fetchTodos(filter, page)),
    appliedStatusFilter: filter => dispatch(appliedStatusFilter(filter)),
    appliedOrderByFilter: filter => dispatch(appliedOrderByFilter(filter)),
    appliedContentFilter: filter => dispatch(appliedContentFilter(filter)),
});

function TodoListContainer({todosData, filter, fetchTodos, deleteTodo, updateTodo, toggleTodo, appliedStatusFilter, appliedOrderByFilter, appliedContentFilter}) {
    useEffect(() => {
        fetchTodos(filter, 1);
    }, [filter]);
    return (
        <Fragment>
            <TodoFilter appliedStatusFilter={appliedStatusFilter} appliedContentFilter={appliedContentFilter}
                        appliedOrderByFilter={appliedOrderByFilter} filter={filter}/>
            <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} todosData={todosData}/>
        </Fragment>
    );
}

TodoListContainer.propTypes = {
    todosData: PropTypes.object,
    filter: PropTypes.object,
    fetchTodos: PropTypes.func,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    toggleTodo: PropTypes.func,
    appliedStatusFilter: PropTypes.func,
    appliedContentFilter: PropTypes.func,
    appliedOrderByFilter: PropTypes.func,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);