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
