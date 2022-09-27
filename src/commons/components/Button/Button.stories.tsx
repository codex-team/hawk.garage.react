import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from '@/commons/components/Button/Button';

export default {
    title: 'Input/Button',
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


