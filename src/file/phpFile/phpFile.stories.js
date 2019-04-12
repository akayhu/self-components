import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import phpFrontend from './phpFrontend.md';

const reactFile = storiesOf('筆記|PHP', module);

reactFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('PHP 前端', doc(phpFrontend), {
		notes: { markdown: phpFrontend },
	});
