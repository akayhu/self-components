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
import draftJsPluginsEditor from './draftJsPluginsEditor.md';
import draftJsInlineToolbarPlugin from './draftJsInlineToolbarPlugin.md';
import dompurify from './dompurify.md';
import draftJs from './draftJs.md';
import draftConvert from './draftConvert.md';
import ajv from './ajv.md';
import draftJsButtons from './draftJsButtons.md';
import decorateComponentWithProps from './decorateComponentWithProps.md';
import reactRouterDom from './reactRouterDom.md';
import reactCssModules from './reactCssModules.md';
import htmlparser2 from './htmlparser2.md';
import reactRouter from './reactRouter.md';
import lodash from './lodash.md';
import graphqlTag from './graphqlTag.md';
import apolloClient from './apolloClient.md';
import apolloCacheInmemory from './apolloCacheInmemory.md';
import apolloLinkHttp from './apolloLinkHttp.md';
import apolloLinkError from './apolloLinkError.md';
import apolloLink from './apolloLink.md';
import qrcode from './qrcode.md';
import uuid from './uuid.md';
import xstate from './xstate.md';
import reactApollo from './reactApollo.md';
import reactHelmet from './reactHelmet.md';
import reactStickyEl from './reactStickyEl.md';
import reactAddonsShallowCompare from './reactAddonsShallowCompare.md';
import html2canvas from './html2canvas.md';
import bezierEasing from './bezierEasing.md';
import reactScrollchor from './reactScrollchor.md';

const reactFile = storiesOf('筆記|第三方套件', module);

reactFile
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('ajv', doc(ajv), { notes: { markdown: ajv } })
	.add('apollo-client', doc(apolloClient), {
		notes: { markdown: apolloClient },
	})
	.add('apollo-cache-inmemory', doc(apolloCacheInmemory), {
		notes: { markdown: apolloCacheInmemory },
	})
	.add('apollo-link-http', doc(apolloLinkHttp), {
		notes: { markdown: apolloLinkHttp },
	})
	.add('apollo-link-error', doc(apolloLinkError), {
		notes: { markdown: apolloLinkError },
	})
	.add('apollo-link', doc(apolloLink), { notes: { markdown: apolloLink } })
	.add('ant Design', doc(antd), {
		notes: { markdown: antd },
	})
	.add('autosize', doc(autosize), { notes: { markdown: autosize } })
	.add('bezier-easing', doc(bezierEasing), {
		notes: { markdown: bezierEasing },
	})
	.add('decorate-component-with-props', doc(decorateComponentWithProps), {
		notes: { markdown: decorateComponentWithProps },
	})
	.add('draft-js', doc(draftJs), { notes: { markdown: draftJs } })
	.add('draft-convert', doc(draftConvert), {
		notes: { markdown: draftConvert },
	})
	.add('draft-js-buttons', doc(draftJsButtons), {
		notes: { markdown: draftJsButtons },
	})
	.add('draft-js-plugins-editor', doc(draftJsPluginsEditor), {
		notes: { markdown: draftJsPluginsEditor },
	})
	.add('draft-js-inline-toolbar-plugin', doc(draftJsInlineToolbarPlugin), {
		notes: { markdown: draftJsInlineToolbarPlugin },
	})
	.add('dompurify', doc(dompurify), { notes: { markdown: dompurify } })
	.add('graphql-tag', doc(graphqlTag), { notes: { markdown: graphqlTag } })
	.add('htmlparser2', doc(htmlparser2), { notes: { markdown: htmlparser2 } })
	.add('html2canvas', doc(html2canvas), { notes: { markdown: html2canvas } })
	.add('lodash', doc(lodash), { notes: { markdown: lodash } })
	.add('localStorage', doc(localStorage), { notes: { markdown: localStorage } })
	.add('lorem-ipsum', doc(loremIpsum), { notes: { markdown: loremIpsum } })
	.add('material-UI ', doc(materialUi), { notes: { markdown: materialUi } })
	.add('moment', doc(moment), { notes: { markdown: moment } })
	.add('prop-types', doc(propTypes), { notes: { markdown: propTypes } })
	.add('qrcode.react', doc(qrcode), { notes: { markdown: qrcode } })
	.add('react-apollo', doc(reactApollo), { notes: { markdown: reactApollo } })
	.add('react-Autocomplete', doc(reactAutocomplete), {
		notes: { markdown: reactAutocomplete },
	})
	.add('react-addons-shallow-compare', doc(reactAddonsShallowCompare), {
		notes: { markdown: reactAddonsShallowCompare },
	})
	.add('react-device-detect', doc(reactDeviceDetect), {
		notes: { markdown: reactDeviceDetect },
	})
	.add('react DnD', doc(reactDnD), { notes: { markdown: reactDnD } })
	.add('recompose', doc(recompose), { notes: { markdown: recompose } })
	.add('react-helmet', doc(reactHelmet), { notes: { markdown: reactHelmet } })
	.add('react-Image-Crop', doc(reactImageCrop), {
		notes: { markdown: reactImageCrop },
	})
	.add('react-scrollchor', doc(reactScrollchor), {
		notes: { markdown: reactScrollchor },
	})
	.add('react-sticky-el', doc(reactStickyEl), {
		notes: { markdown: reactStickyEl },
	})
	.add('react-css-modules', doc(reactCssModules), {
		notes: { markdown: reactCssModules },
	})
	.add('react-router', doc(reactRouter), { notes: { markdown: reactRouter } })
	.add('react-router-dom', doc(reactRouterDom), {
		notes: { markdown: reactRouterDom },
	})
	.add('styled-Components', doc(styledComponents), {
		notes: { markdown: styledComponents },
	})
	.add('uuid', doc(uuid), { notes: { markdown: uuid } })
	.add('xstate', doc(xstate), { notes: { markdown: xstate } });
