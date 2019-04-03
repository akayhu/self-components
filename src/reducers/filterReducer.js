const viewFilter = (state = 'all', action) => {
	switch (action.type) {
		case 'VIEW_FILTER':
			return action.filter;
		default:
			return state;
	}
};

export default viewFilter;
