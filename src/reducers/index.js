import { combineReducers } from 'redux';
import todoData from './todoReducer';
import viewFilter from './filterReducer';

const todoApp = combineReducers({
	todoData,
	viewFilter,
});

export default todoApp;
