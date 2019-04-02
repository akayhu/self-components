import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import rwdSize from './rwdSize.md';

const cssFile = storiesOf('筆記|CSS 筆記', module);

cssFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('RWD 各尺寸參考', doc(rwdSize), { notes: { markdown: rwdSize } });
