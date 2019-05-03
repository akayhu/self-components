import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import antd from './antd.md';
import propTypes from './propTypes.md';
import moment from './moment.md';
import styledComponents from './styledComponents.md';
import materialUi from './materialUi.md';
import reactDeviceDetect from './reactDeviceDetect.md';
import recompose from './recompose.md';
import loremIpsum from './loremIpsum.md';
import reactAutocomplete from './reactAutocomplete.md';
import autosize from './autosize.md';
import reactImageCrop from './reactImageCrop.md';
import localStorage from './localStorage.md';
import reactDnD from './reactDnD.md';

const reactFile = storiesOf('筆記|第三方套件', module);

reactFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('Ant Design', doc(antd), {
		notes: { markdown: antd },
	})
	.add('autosize', doc(autosize), { notes: { markdown: autosize } })
	.add('localStorage', doc(localStorage), { notes: { markdown: localStorage } })
	.add('lorem-ipsum', doc(loremIpsum), { notes: { markdown: loremIpsum } })
	.add('Material-UI ', doc(materialUi), { notes: { markdown: materialUi } })
	.add('Moment', doc(moment), { notes: { markdown: moment } })
	.add('prop-types', doc(propTypes), { notes: { markdown: propTypes } })
	.add('react-Autocomplete', doc(reactAutocomplete), {
		notes: { markdown: reactAutocomplete },
	})
	.add('react-device-detect', doc(reactDeviceDetect), {
		notes: { markdown: reactDeviceDetect },
	})
	.add('react DnD', doc(reactDnD), { notes: { markdown: reactDnD } })
	.add('recompose', doc(recompose), { notes: { markdown: recompose } })
	.add('react-Image-Crop', doc(reactImageCrop), {
		notes: { markdown: reactImageCrop },
	})
	.add('styled-Components', doc(styledComponents), {
		notes: { markdown: styledComponents },
	});
