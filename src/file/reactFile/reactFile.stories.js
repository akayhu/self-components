import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import reactLifeCycle from './reactLifeCycle.md';
import reactPropType from './reactPropTypes.md';
import hocPreliminary from './hocPreliminary.md';
import reactForm from './reactForm.md';
import reactTodoList from './reactTodoList.md';
import reactHocExercise from './reactHocExercise.md';
import hocApi from './hocApi.md';

const reactFile = storiesOf('筆記|React', module);

reactFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('React Life Cycle (React 16.3版之後)', doc(reactLifeCycle), {
		notes: { markdown: reactLifeCycle },
	})
	.add('React 的 PropTypes 使用方法', doc(reactPropType), {
		notes: { markdown: reactPropType },
	})
	.add('React 對表單元素的prop設置值', doc(reactForm), {
		notes: { markdown: reactForm },
	})
	.add('React HOC API', doc(hocApi), { notes: { markdown: hocApi } })
	.add('React HOC 初探觀念', doc(hocPreliminary), {
		notes: { markdown: hocPreliminary },
	})
	.add('React HOC 練習', doc(reactHocExercise), {
		notes: { markdown: reactHocExercise },
	})
	.add('React TodoList Example', doc(reactTodoList), {
		notes: { markdown: reactTodoList },
	});
