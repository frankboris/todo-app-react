import { connect } from 'react-redux';
import TodoList from '../components/TodoList'
import { updateTodo, deleteTodo, toggleTodo } from '../actions/todosAction';
import { getVisibleTodos } from '../selectors';

const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    updateTodo: todo => dispatch(updateTodo(todo))
})

export const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);