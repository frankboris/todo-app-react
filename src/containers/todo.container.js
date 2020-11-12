import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import {
    appliedContentFilter,
    appliedOrderByFilter,
    appliedStatusFilter,
    deleteTodo,
    fetchTodos,
    toggleTodo,
    updateTodo
} from '../actions/todo.action';
import React, {useEffect} from 'react';

const mapStateToProps = (state) => ({
    todosData: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: todo => dispatch(updateTodo(todo)),
    fetchTodos: (filter, page) => dispatch(fetchTodos(filter, page)),
});

function TodoListContainer({todosData, fetchTodos, deleteTodo, updateTodo, toggleTodo}) {
    const filter = todosData.filter;
    useEffect(() => {
        fetchTodos(filter, 1);
    }, [filter]);
    return <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} todosData={todosData}/>;
}

TodoListContainer.propTypes = {
    todosData: PropTypes.object,
    fetchTodos: PropTypes.func,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    toggleTodo: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);