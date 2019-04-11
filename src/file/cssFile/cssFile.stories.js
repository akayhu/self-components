import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import rwdSize from './rwdSize.md';
import pixelToEm from './pixelToEm.md';

const cssFile = storiesOf('筆記|CSS', module);

cssFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('RWD 各尺寸參考', doc(rwdSize), { notes: { markdown: rwdSize } })
	.add('px 與 em 轉換', doc(pixelToEm), { notes: { markdown: pixelToEm } });
