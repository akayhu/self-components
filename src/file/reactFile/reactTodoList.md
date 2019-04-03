# React TodoList Example

自己練習的 React TodoList

範疇：新增、修改、刪除、編輯、顯示已勾選、顯示未勾選、顯示全部

![image](https://github.com/akayhu/self-components/blob/master/src/file/reactFile/image/todoList.png?raw=true)

可了解 Action -> Store -> View 原理

## Sources Code

#### containers/todoList/index.js

```js
import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import CreateTodo from '../../components/createTodo';
import TodoList from '../../components/todoList';
import NavButton from '../../components/navButton';
import { connect } from 'react-redux';
import {
	addTodo,
	viewFilter,
	toggleTodo,
	deltetTodo,
	editTodo,
} from '../../actions';

class TodoListMain extends Component {
	addTodoFunc = inputValue => {
		const { addTodo } = this.props;
		addTodo(inputValue);
	};

	chanckFilter = type => {
		const { viewFilter } = this.props;
		viewFilter(type);
	};

	toggleTodoFunc = id => {
		const { toggleTodo } = this.props;
		toggleTodo(id);
	};

	deltetTodoFunc = id => {
		const { deltetTodo } = this.props;
		deltetTodo(id);
	};

	editTodoFunc = (id, value) => {
		const { editTodo } = this.props;
		editTodo(id, value);
	};

	render() {
		const { todoList, showFilter } = this.props;
		return (
			<div className="todoList_main">
				<CreateTodo addTodoFunc={this.addTodoFunc} />
				<NavButton chanckFilterFunc={this.chanckFilter} />
				<TodoList
					listData={todoList}
					showFilter={showFilter}
					toggleTodoFunc={this.toggleTodoFunc}
					deltetTodoFunc={this.deltetTodoFunc}
					editTodoFunc={this.editTodoFunc}
				/>
			</div>
		);
	}
}

TodoListMain.propTypes = {
	addTodo: PropTypes.func,
	viewFilter: PropTypes.func,
	todoList: PropTypes.array,
	showFilter: PropTypes.string,
	toggleTodo: PropTypes.func,
	deltetTodo: PropTypes.func,
	editTodo: PropTypes.func,
};

const mapStateToProps = state => {
	return {
		todoList: state.todoData,
		showFilter: state.viewFilter,
	};
};

const action = {
	addTodo,
	viewFilter,
	toggleTodo,
	deltetTodo,
	editTodo,
};

export default connect(
	mapStateToProps,
	action
)(TodoListMain);
```

components/createTodo/index.js

```js
import React, { Component } from 'react';
import { CreateButton } from './styled';

const inputStyle = {
	borderRadius: '3px',
	padding: '6px 3px',
	background: 'transparent',
	color: '#000',
	border: '1px solid #d0d0d0',
	cursor: 'pointer',
};

class CreateTodo extends Component {
	addTodoList = e => {
		const { addTodoFunc } = this.props;
		e.preventDefault();
		let input = this.refs.todoListInput;
		let inputValue = input.value;
		addTodoFunc(inputValue);
		input.value = '';
	};

	render() {
		return (
			<form onSubmit={this.addTodoList}>
				<input style={inputStyle} type="text" ref="todoListInput" />
				<CreateButton type="submit">新增</CreateButton>
			</form>
		);
	}
}

export default CreateTodo;
```

components/createTodo/styled.js

```js
import styled, { css } from 'styled-components/';

export const Li = styled.li`
	margin-bottom: 5px;

	&:hover {
		color: blue;
	}
`;

export const Input = styled.input`
	margin-right: 6px;
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  margin: 0 1em;
  background: transparent;
  color: #000;
  border: 1px solid #d0d0d0;
  cursor: pointer;

  ${props =>
		props.all &&
		css`
			margin-left: 0;
		`}

  ${props =>
		props.completed &&
		css`
			background: #34abca;
			color: #fff;
			border: 1px solid #34abca;
		`}

  ${props =>
		props.unCompleted &&
		css`
			background: red;
			color: #fff;
			border: 1px solid red;
		`}
`;

export const CreateButton = styled.button`
	border-radius: 3px;
	padding: 5px 10px;
	margin-left: 10px;
	background: transparent;
	color: #000;
	border: 1px solid #d0d0d0;
	cursor: pointer;
`;

export const DelButton = styled.button`
	border-radius: 3px;
	padding: 5px 10px;
	margin-left: 6px;
	background: red;
	color: #fff;
	border: 1px solid red;
	cursor: pointer;
`;

export const EditInput = styled.input`
	border-radius: 3px;
	padding: 6px 3px;
	background: transparent;
	color: #000;
	border: 1px solid #d0d0d0;
	cursor: pointer;
`;

export const NavDiv = styled.div`
	margin: 15px 0;
`;

export const Hr = styled.hr`
	margin: 14px 0;
`;

export const Ul = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
`;
```

components/todoList/index.js

```js
import React, { Component } from 'react';
import TodoListItem from './todoListItem';
import { Ul } from './styled';

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
```

components/todoListItem/index.js

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Li, Input, Button, DelButton, EditInput } from './styled';

class TodoListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.data.text,
			edit: false,
		};
	}
	lineThrough = id => {
		const { toggleTodoFunc } = this.props;
		toggleTodoFunc(id);
	};
	deltetItem = id => {
		const { deltetTodoFunc } = this.props;
		deltetTodoFunc(id);
	};
	editItem = event => {
		this.setState({
			value: event.target.value,
		});
	};
	editItemEnd = id => {
		const { value } = this.state;
		const { editTodoFunc } = this.props;
		editTodoFunc(id, value);
		this.setState({ edit: false });
	};
	editItemView = () => {
		this.setState({ edit: true });
	};
	renderEdit = (edit, id, text) => {
		if (edit) {
			return (
				<span>
					<EditInput type="text" value={text} onChange={this.editItem} />
					<Button onClick={() => this.editItemEnd(id)}>完成編輯</Button>
				</span>
			);
		}
		return <span onClick={this.editItemView}>{text}</span>;
	};

	render() {
		const { edit, value } = this.state;
		const { id, completed } = this.props.data;
		return (
			<Li
				style={{
					textDecoration: completed === 'completed' ? 'line-through' : 'none',
				}}
			>
				<Input
					type="checkbox"
					checked={completed === 'completed'}
					onChange={() => this.lineThrough(id)}
					readOnly
				/>
				{this.renderEdit(edit, id, value)}
				<DelButton onClick={() => this.deltetItem(id)}>刪除</DelButton>
			</Li>
		);
	}
}

TodoListItem.propTypes = {
	id: PropTypes.number,
	completed: PropTypes.bool,
};

export default TodoListItem;
```

components/navButton/index.js

```js
import React, { Component } from 'react';
import { NavDiv, Button, Hr } from './styled';

class NavButton extends Component {
	render() {
		const { chanckFilterFunc } = this.props;
		return (
			<NavDiv>
				<Button all onClick={() => chanckFilterFunc('all')}>
					全顯示
				</Button>
				<Button completed onClick={() => chanckFilterFunc('completed')}>
					顯示勾選
				</Button>
				<Button unCompleted onClick={() => chanckFilterFunc('unCompleted')}>
					顯示未勾選
				</Button>
				<Hr />
			</NavDiv>
		);
	}
}

export default NavButton;
```

actions/index.js

```js
let nextId = 0;

// 新增
export const ADD_TODO = 'ADD_TODO';
export function addTodo(text) {
	return {
		type: ADD_TODO,
		id: nextId++,
		text,
	};
}

// 過濾
export const VIEW_FILTER = 'VIEW_FILTER';
export function viewFilter(filter) {
	return {
		type: VIEW_FILTER,
		filter,
	};
}

// 畫線
export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id,
	};
}

// 刪除
export const DELETE_TODO = 'DELETE_TODO';
export function deltetTodo(id) {
	return {
		type: DELETE_TODO,
		id,
	};
}

// 編修
export const EDIT_TODO = 'EDIT_TODO';
export function editTodo(id, text) {
	return {
		type: EDIT_TODO,
		id,
		text,
	};
}
```

reducers/index.js

```js
import { combineReducers } from 'redux';
import todoData from './todoReducer';
import viewFilter from './filterReducer';

const todoApp = combineReducers({
	todoData,
	viewFilter,
});

export default todoApp;
```

reducers/filterReducer.js

```js
const viewFilter = (state = 'all', action) => {
	switch (action.type) {
		case 'VIEW_FILTER':
			return action.filter;
		default:
			return state;
	}
};

export default viewFilter;
```

reducers/todoReducer.js

```js
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
```
