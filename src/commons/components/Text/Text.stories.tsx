import {Text} from "./Text";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
  title: 'Display/Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (props) => <Text {...props} />;

export const Default = Template.bind({});
Default.args = { children: 'Text component' };
