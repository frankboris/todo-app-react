import { connect } from 'react-redux';
import TodoList from '../components/TodoList'
import {updateTodo, deleteTodo, toggleTodo, fetchTodos, appliedFilter} from '../actions/todosAction';
import React, {Fragment, useEffect} from "react";
import TodoFilter from "../components/TodoFilter";

const mapStateToProps = (state) => ({
	todosData: state.todos,
    filter: state.todos.filter
})

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: todo => dispatch(updateTodo(todo)),
    fetchTodos: (filter, page) => dispatch(fetchTodos(filter, page)),
    appliedFilter: filter => dispatch(appliedFilter(filter)),
})

function TodoListContainer ({ todosData, filter, fetchTodos, deleteTodo, updateTodo, toggleTodo, appliedFilter }) {
    useEffect(() => {
        fetchTodos(filter, 1)
    }, [filter])
    return (
        <Fragment>
            <TodoFilter appliedFilter={appliedFilter} initFilter={filter} />
            <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} todosData={todosData} />
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);