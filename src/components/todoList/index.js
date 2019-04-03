import React, { Component } from 'react';
import TodoListItem from '../todoListItem';
import { Ul } from '../styled';

class TodoList extends Component {
	renderList = () => {
		const {
			listData,
			showFilter,
			toggleTodoFunc,
			deltetTodoFunc,
			editTodoFunc,
		} = this.props;

		if (listData.length === 0) return null;

		const renderListData = listData.filter((items, index) =>
			showFilter === 'all' ? true : items.completed === showFilter
		);

		return renderListData.map(items => (
			<TodoListItem
				key={items.id}
				data={items}
				toggleTodoFunc={toggleTodoFunc}
				deltetTodoFunc={deltetTodoFunc}
				editTodoFunc={editTodoFunc}
			/>
		));
	};

	render() {
		return <Ul>{this.renderList()}</Ul>;
	}
}

export default TodoList;
