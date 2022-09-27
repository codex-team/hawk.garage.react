import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Delimiter from "@/commons/components/Delimiter/Delimiter";

export default {
  title: 'UI/Delimiter',
  component: Delimiter,
} as ComponentMeta<typeof Delimiter>;

const Template: ComponentStory<typeof Delimiter> = (props) => <Delimiter
  {...props} />;

export const Default = Template.bind({});
