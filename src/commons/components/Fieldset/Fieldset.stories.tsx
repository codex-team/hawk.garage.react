import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Fieldset } from '@/commons/components/Fieldset/Fieldset';

export default {
  title: 'Input/Fieldset',
  component: Fieldset,
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = (props) => <Fieldset
  {...props} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Email Address',
  placeholder: 'name@best-team.com',
  type: 'email',
  name: 'email',
};
