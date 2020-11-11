import { connect } from 'react-redux';
import TodoFilter from '../components/TodoFilter'
import { appliedFilter } from '../actions/filterAction';
import { getVisibilityFilter } from '../selectors';

const mapStateToProps = (state) => ({
	initFilter: getVisibilityFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
    appliedFilter: filter => dispatch(appliedFilter(filter)),
})

export const TodoFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter);