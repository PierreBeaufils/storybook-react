import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu, MenuProps } from './Menu';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};