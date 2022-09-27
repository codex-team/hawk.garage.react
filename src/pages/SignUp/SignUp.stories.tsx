import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SignUp} from "@/pages/SignUp/SignUp";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Pages/SignUp',
  component: SignUp,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/sign-up'
    }
  }
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = () => <SignUp />;

export const Default = Template.bind({});
