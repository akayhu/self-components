import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import vueFrontend from './vueFrontend.md';
import vueRouter from './vueRouter.md';
import vueComputed from './vueComputed.md';
import vueInstruction from './vueInstruction.md';
import vueLifecycle from './vueLifecycle.md';

const reactFile = storiesOf('筆記|Vue', module);

reactFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('Vue 基礎介紹', doc(vueFrontend), {
		notes: { markdown: vueFrontend },
	})
	.add('vue 生命週期', doc(vueLifecycle), { notes: { markdown: vueLifecycle } })
	.add('Vue 指令與methods', doc(vueInstruction), {
		notes: { markdown: vueInstruction },
	})
	.add('Vue Computed', doc(vueComputed), { notes: { markdown: vueComputed } })
	.add('Vue Router', doc(vueRouter), { notes: { markdown: vueRouter } });
