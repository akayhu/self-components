import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import react from './react.md';
import storybook from './storybook.md';
import cleanCode from './cleanCode.md';
import immutable from './immutable.md';
import onlineLearning from './onlineLearning.md';
import rwdSize from './rwdSize.md';
import arrayApproach from './arrayApproach.md';
import rubyInstall from './rubyInstall.md';
import gitInstall from './gitInstall.md';
import reactLifeCycle from './reactLifeCycle.md';
import travisCi from './travis-ci.md';
import httpHeader from './httpHeader.md';
import reqular from './regular.md';
import reactPropType from './reactPropTypes.md';
import browserSupport from './browserSupport.md';
import arrayObject from './arrayObject.md';
import vsCode from './vsCode.md';
import process from './process.md';
import curry from './curry.md';
import requireJs from './require.md';
import es6Module from './es6Module.md';

const file = storiesOf('筆記', module);

file
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('安裝 React 開發環境', doc(react), { notes: { markdown: react } })
	.add('安裝 Storybook 環境', doc(storybook), {
		notes: { markdown: storybook },
	})
	.add('React Life Cycle (React 16.3版之後)', doc(reactLifeCycle), {
		notes: { markdown: reactLifeCycle },
	})
	.add('React 的 PropTypes 使用方法', doc(reactPropType), {
		notes: { markdown: reactPropType },
	})
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
	.add('process對象', doc(process), { notes: { markdown: process } })
	.add('瀏覽器不支援警告視窗', doc(browserSupport), {
		notes: { markdown: browserSupport },
	})
	.add('HTTP 訊息的 header', doc(httpHeader), {
		notes: { markdown: httpHeader },
	})
	.add('RWD 各尺寸參考', doc(rwdSize), { notes: { markdown: rwdSize } })
	.add('GitHub Pages 與 Travis CI 串接教學', doc(travisCi), {
		notes: { markdown: travisCi },
	})
	.add('Visual Studio Code 推薦安裝套件', doc(vsCode), {
		notes: { markdown: vsCode },
	})
	.add('Apple Mac 安裝 Git 教學', doc(gitInstall), {
		notes: { markdown: gitInstall },
	})
	.add('Apple Mac 安裝 Ruby 教學', doc(rubyInstall), {
		notes: { markdown: rubyInstall },
	})
	.add('線上學習資源', doc(onlineLearning), {
		notes: { markdown: onlineLearning },
	});
