import React, { Component } from 'react';
import { CreateButton } from '../styled';

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
