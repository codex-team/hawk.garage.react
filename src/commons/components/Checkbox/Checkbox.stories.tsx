import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Checkbox from "@/commons/components/Checkbox/Checkbox";

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: { action: 'Clicked'}
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (props) => <Checkbox
  {...props} />;

export const Default = Template.bind({});
