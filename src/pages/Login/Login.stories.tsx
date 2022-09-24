import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Login} from "./Login";

export default {
  title: 'Pages/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (props) => <Login
  {...props} />;

export const Default = Template.bind({});
