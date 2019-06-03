import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import vueFrontend from './vueFrontend.md';
import vueRouter from './vueRouter.md';

const reactFile = storiesOf('筆記|Vue', module);

reactFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('Vue 前端', doc(vueFrontend), {
		notes: { markdown: vueFrontend },
	})
	.add('vueRouter', doc(vueRouter), { notes: { markdown: vueRouter } });
