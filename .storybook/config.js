import { configure, addDecorator, addParameters } from "@storybook/react";
import { withPropsTable } from "storybook-addon-react-docgen";
import { withOptions } from "@storybook/addon-options";
import { withKnobs } from '@storybook/addon-knobs/react';
import myTheme from './myTheme';
import 'antd/dist/antd.css';
import './style.css';

const loadStories = () => {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
};

// 爬取 propTypes
addDecorator(withPropsTable);
addDecorator(withKnobs);

addParameters({
  options: {
    theme: myTheme,
  },
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// 調整 storybook 外觀
addDecorator(
  withOptions({
    name: "自己的 Storybook",
  })
);

configure(loadStories, module);