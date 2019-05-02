import React from 'react';
import { storiesOf } from '@storybook/react';
import { doc } from 'storybook-readme';
import antd from './antd.md';
import propTypes from './propTypes.md';
import moment from './moment.md';
import styledComponents from './styledComponents.md';
import materialUi from './materialUi.md';
import reactDeviceDetect from './reactDeviceDetect.md';

const reactFile = storiesOf('筆記|第三方套件', module);

reactFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('Ant Design', doc(antd), {
		notes: { markdown: antd },
	})
	.add('Material-UI ', doc(materialUi), { notes: { markdown: materialUi } })
	.add('moment', doc(moment), { notes: { markdown: moment } })
	.add('prop-types', doc(propTypes), { notes: { markdown: propTypes } })
	.add('react-device-detect', doc(reactDeviceDetect), {
		notes: { markdown: reactDeviceDetect },
	})
	.add('styledComponents', doc(styledComponents), {
		notes: { markdown: styledComponents },
	});
