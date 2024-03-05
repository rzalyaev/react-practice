import type {Meta, StoryObj} from '@storybook/react';

import { ControlledAccordion } from './ControlledAccordion';
import {useState} from "react";

const meta: Meta<typeof ControlledAccordion> = {
  component: ControlledAccordion,
};

export default meta;

type Story = StoryObj<typeof ControlledAccordion>
export const FirstStory: Story = {
  args: {
    titleValue: 'Hello',
    collapsed: true
  }
}

export const Collapsed = () => {
  return <ControlledAccordion titleValue={'Collapsed Accordion'} collapsed={true} onChange={() => {}}/>
}

export const Expanded = () => {
  return <ControlledAccordion titleValue={'Expanded Accordion'} collapsed={false} onChange={() => {}}/>
}

export const Clickable = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return <ControlledAccordion titleValue={'Accordion (click to collapse/expand)'}
                              collapsed={collapsed}
                              onChange={() => setCollapsed(!collapsed)}
  />
}