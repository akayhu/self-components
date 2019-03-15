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
import rubyInstall from 'rubyInstall.md';

storiesOf('筆記', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('安裝 React 開發環境', doc(react))
  .add('安裝 Storybook 環境', doc(storybook))
  .add('Immutable', doc(immutable))
  .add('JavaScript 七種陣列的處理方法', doc(arrayApproach))
  .add('在 JavaScript 中編寫更好的條件的5個技巧', doc(cleanCode))
  .add('RWD 各尺寸參考', doc(rwdSize))
  .add('Apple 安裝 Ruby 教學', doc(rubyInstall))
  .add('線上學習資源', doc(onlineLearning))