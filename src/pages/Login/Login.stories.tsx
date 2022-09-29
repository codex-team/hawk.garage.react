import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Login } from '@/pages/Login/Login';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/Login',
  component: Login,
  decorators: [ withRouter ],
  parameters: {
    reactRouter: {
      routePath: '/login',
    },
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (props) => <Login
  {...props} />;

export const Default = Template.bind({});
