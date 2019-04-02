import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import process from './process.md';

const nodeFile = storiesOf('筆記|Node', module);

nodeFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('process對象', doc(process), { notes: { markdown: process } });
