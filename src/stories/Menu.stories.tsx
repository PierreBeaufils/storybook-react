import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu, MenuProps } from './Menu';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Example/Menu', // Name of the component. The / separator creates Groups
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
  /* A decorator is a way to wrap a story in extra “rendering” functionality. Useful for a better preview, but without
  affecting the css of the component */
  decorators: [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>],
  // args : { primary: true } -- Set primary arg on true for all component's stories
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

/*Parameters are a set of static, named metadata about a story, typically used to control the behavior of Storybook features and addons.
Here we can set values of the background in the preview, useful to test in light and dark mode for example.
Parameters can be set at the story level but also at component level in the default export with "parameters" key, and also for all stories
via parameters in the .storybook/preview.js file
*/
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#012045' },
    ],
  },
};
// Primary.decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>] -> A decorator for a single Story

export const Secondary = Template.bind({});
Secondary.args = {
  ...Secondary.args, // also works. ...Primary.args allows to import args from another story with spread.
  items: ['Item 1', 'Item 2', 'Item 3'],
};