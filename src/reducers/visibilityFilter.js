import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const visibilityFilter = (state = SHOW_ALL, action) => {
	switch (action.type) {
		case SHOW_ALL:
			return action.filter
		case SHOW_COMPLETED:
			return action.filter
		case SHOW_ACTIVE:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter