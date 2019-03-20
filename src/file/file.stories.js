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

const file = storiesOf('筆記', module);

file
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('安裝 React 開發環境', doc(react))
  .add('安裝 Storybook 環境', doc(storybook))
  .add('React Life Cycle (React 16.3版之後)', doc(reactLifeCycle))
  .add('React 的 PropTypes 使用方法', doc(reactPropType))
  .add('Immutable', doc(immutable))
  .add('JavaScript 七種陣列的處理方法', doc(arrayApproach))
  .add('JavaScript 正則表達式', doc(reqular))
  .add('在 JavaScript 中編寫更好的條件的5個技巧', doc(cleanCode))
  .add('HTTP 訊息的 header', doc(httpHeader))
  .add('RWD 各尺寸參考', doc(rwdSize))
  .add('GitHub Pages 與 Travis CI 串接教學', doc(travisCi))
  .add('Apple Mac 安裝 Git 教學', doc(gitInstall))
  .add('Apple Mac 安裝 Ruby 教學', doc(rubyInstall))
  .add('線上學習資源', doc(onlineLearning))