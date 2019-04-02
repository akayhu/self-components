import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import react from './react.md';
import storybook from './storybook.md';
import rubyInstall from './rubyInstall.md';
import gitInstall from './gitInstall.md';
import onlineLearning from './onlineLearning.md';
import travisCi from './travis-ci.md';
import vsCode from './vsCode.md';

const installFile = storiesOf('環境安裝與學習資源 筆記', module);

installFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('安裝 React 開發環境', doc(react), { notes: { markdown: react } })
	.add('安裝 Storybook 環境', doc(storybook), {
		notes: { markdown: storybook },
	})
	.add('Apple Mac 安裝 Git 教學', doc(gitInstall), {
		notes: { markdown: gitInstall },
	})
	.add('Apple Mac 安裝 Ruby 教學', doc(rubyInstall), {
		notes: { markdown: rubyInstall },
	})
	.add('GitHub Pages 與 Travis CI 串接教學', doc(travisCi), {
		notes: { markdown: travisCi },
	})
	.add('Visual Studio Code 推薦安裝套件', doc(vsCode), {
		notes: { markdown: vsCode },
	})
	.add('線上學習資源', doc(onlineLearning), {
		notes: { markdown: onlineLearning },
	});
