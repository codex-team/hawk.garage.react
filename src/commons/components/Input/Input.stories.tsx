import { Input } from "@/commons/components/Input/Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Input/Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (props) => <Input {...props} />;

export const Default = Template;

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
    iconLeft: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/></svg>,
    placeholder: 'Search string',
}
