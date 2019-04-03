const todoData = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: 'unCompleted',
				},
			];
		case 'TOGGLE_TODO':
			return state.map(todoItem =>
				todoItem.id === action.id
					? {
							...todoItem,
							completed:
								todoItem.completed === 'unCompleted'
									? 'completed'
									: 'unCompleted',
					  }
					: todoItem
			);
		case 'DELETE_TODO':
			return state.filter(todoItem => !(todoItem.id === action.id));
		case 'EDIT_TODO':
			return state.map(todoItem =>
				todoItem.id === action.id
					? { ...todoItem, text: action.text }
					: todoItem
			);
		default:
			return state;
	}
};

export default todoData;
