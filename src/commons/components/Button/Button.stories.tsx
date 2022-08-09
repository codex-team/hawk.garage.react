import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
      onClick: { action: 'Clicked'}
    }
  } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => <Button
    {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};


