import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import cleanCode from './cleanCode.md';
import immutable from './immutable.md';
import arrayApproach from './arrayApproach.md';
import reqular from './regular.md';
import browserSupport from './browserSupport.md';
import arrayObject from './arrayObject.md';
import curry from './curry.md';
import requireJs from './require.md';
import es6Module from './es6Module.md';

const javascriptFile = storiesOf('Javascript 筆記', module);

javascriptFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('Immutable', doc(immutable), { notes: { markdown: immutable } })
	.add('JavaScript 七種陣列的處理方法', doc(arrayApproach), {
		notes: { markdown: arrayApproach },
	})
	.add(
		'JavaScript：使用 Array.map、Object.values 和 Object.keys 處理一連串的資料',
		doc(arrayObject),
		{ notes: { markdown: arrayObject } }
	)
	.add('JavaScript 正則表達式', doc(reqular), { notes: { markdown: reqular } })
	.add('在 JavaScript 中編寫更好的條件的5個技巧', doc(cleanCode), {
		notes: { markdown: cleanCode },
	})
	.add('Currying in JavaScript（柯里化）', doc(curry), {
		notes: { markdown: curry },
	})
	.add('Javascript 的 require 模塊(ES6以前)', doc(requireJs), {
		notes: { markdown: requireJs },
	})
	.add('ES6 Modules(export和import)', doc(es6Module), {
		notes: { markdown: es6Module },
	})
	.add('瀏覽器不支援警告視窗', doc(browserSupport), {
		notes: { markdown: browserSupport },
	});
