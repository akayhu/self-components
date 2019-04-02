import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import httpHeader from './httpHeader.md';

const httpFile = storiesOf('筆記|通訊協定 筆記', module);

httpFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('HTTP 訊息的 header', doc(httpHeader), {
		notes: { markdown: httpHeader },
	});
