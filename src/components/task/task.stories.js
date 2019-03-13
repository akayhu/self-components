import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { doc } from 'storybook-readme';
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

storiesOf('Task', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('說明文件', doc(readme))
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);