import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from '@/commons/components/Label/Label';

export default {
  title: 'Display/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (props) => <Label {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Email address',
};
