import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import readme from './readme.md';
import Task from './task';

export const task = {
	id: 1,
	title: 'Test Task',
	state: 'TASK_INBOX',
	updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
	onPinTask: action('onPinTask'),
	onArchiveTask: action('onArchiveTask'),
};

const TaskStories = storiesOf('Task', module);

TaskStories.addDecorator(story => (
	<div style={{ padding: '3rem' }}>{story()}</div>
))
	.add('default', () => <Task task={task} {...actions} />, {
		notes: { markdown: readme },
	})
	.add(
		'pinned',
		() => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />,
		{ notes: { markdown: readme } }
	)
	.add(
		'archived',
		() => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />,
		{ notes: { markdown: readme } }
	);
