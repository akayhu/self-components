import React, { Component } from 'react';
import { CreateButton } from '../styled';
import Validators from 'util/validator';

const inputStyle = {
	borderRadius: '3px',
	padding: '6px 3px',
	background: 'transparent',
	color: '#000',
	border: '1px solid #d0d0d0',
	cursor: 'pointer',
};

const config = {
	data: {
		name: ['notEmpty', { maxLength: 100 }],
	},
};

const val = new Validators(config);

class CreateTodo extends Component {
	state = {
		errorMessage: '',
	};

	addTodoList = e => {
		const { addTodoFunc } = this.props;
		e.preventDefault();
		let input = this.refs.todoListInput;
		let inputValue = input.value;
		addTodoFunc(inputValue);
		input.value = '';
	};

	handleError = () => {
		if (this.state.errorMessage.length > 0 && this.onError) {
			this.onError('name', this.state.errorMessage);
		}
	};

	onError = (name, errorMessage) => {
		alert(`${name}${errorMessage}`);
	};

	_onBlur = e => {
		if (val) {
			let validObject = {};
			validObject['name'] = e.target.value;
			let validResult = val.validate(validObject);
			if (validResult.status) {
				this.setState({
					errorMessage: '',
				});
			} else {
				if (!validResult.errorMessage['name']) {
					validResult.errorMessage['name'] = '';
				}
				this.setState(
					{
						errorMessage: validResult.errorMessage['name'],
					},
					() => {
						this.handleError();
					}
				);
			}
		}
	};

	render() {
		return (
			<form onSubmit={this.addTodoList}>
				<input
					style={inputStyle}
					type="text"
					name="name"
					ref="todoListInput"
					onBlur={this._onBlur}
				/>
				<CreateButton type="submit">新增</CreateButton>
			</form>
		);
	}
}

export default CreateTodo;
