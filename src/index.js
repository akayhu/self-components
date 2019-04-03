import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import TodoListMain from 'containers/todoList';
import reducer from 'reducers';

const loggerMiddleware = createLogger();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancer(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

// 使用 <BrowserRouter> 作為我們的客戶端路由器組件
render(
	<Provider store={store}>
		<BrowserRouter>
			<TodoListMain />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
