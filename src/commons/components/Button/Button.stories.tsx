import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button, {ButtonSize, ButtonStyle} from './Button';

export default {
    title: 'Example/Button',
    component: Button,
  } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button
    {...args} />;

export const General = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
General.args = {
  buttonSize: ButtonSize.General,
  children: 'Button',
  isLoading: false,
  isDisabled: false,
};

export const Small = Template.bind({});
Small.args = {
  buttonSize: ButtonSize.Small,
  children: 'Button',
};

export const Submit = Template.bind({});
Submit.args = {
  styleType: ButtonStyle.Submit,
  children: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  styleType: ButtonStyle.Warning,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  styleType: ButtonStyle.Secondary,
  children: 'Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: 'Button',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  children: 'Button',
};

export const Shaking = Template.bind({});
Shaking.args = {
  isShacking: true,
  children: 'Button'
}
