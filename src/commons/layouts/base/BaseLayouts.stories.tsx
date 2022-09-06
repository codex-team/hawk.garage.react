import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Container from './Container/Container';
import Aside from "./aside/Aside";
import Content from "./Content/Content";
import Sidebar from "./aside/Sidebar";
import RightAside from "./aside/RightAside";

export default {
  title: 'Layouts/Base',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (props) => <Container>
  <Aside>
    <Sidebar/>
    <RightAside/>
  </Aside>
  <Content/>
</Container>;

export const Default = Template.bind({});
