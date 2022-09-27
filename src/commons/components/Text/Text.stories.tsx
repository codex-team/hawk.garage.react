import React from "react";
import {Text} from "@/commons/components/Text/Text";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  title: 'Display/Text',
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (props) => <Text {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare convallis efficitur. Etiam in tincidunt nisi, ac volutpat tellus. Proin vitae velit libero. Curabitur risus augue, vulputate a quam pulvinar, mattis rutrum risus. Morbi nec elit eget elit aliquam pellentesque non id lorem. Sed id maximus lorem. Proin ac luctus velit. Praesent euismod libero non lorem auctor tincidunt. Vestibulum nec fringilla eros. Pellentesque luctus turpis tincidunt metus porttitor volutpat. Donec vel semper elit, quis tincidunt diam. Integer fringilla tortor et neque pellentesque, quis interdum sapien sagittis.'
};
