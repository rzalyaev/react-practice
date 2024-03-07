import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {ControlledAccordion, ItemType} from './ControlledAccordion';
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

const onClickCallback = action('some item was clicked');

export const Collapsed = () => {
  return <ControlledAccordion titleValue={'Collapsed Accordion'}
                              collapsed={true}
                              onChange={action('onClick')}
                              items={[]}
                              onClick={onClickCallback}
  />
}

export const Expanded = () => {
  const items: ItemType[] = [
    {title: 'Dima', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
  ]
  return <ControlledAccordion titleValue={'Expanded Accordion'}
                              collapsed={false}
                              onChange={() => {}}
                              items={items}
                              onClick={onClickCallback}
  />
}

export const Clickable = () => {
  const items: ItemType[] = [
    {title: 'Dima', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
    {title: 'Viktor', value: 4}
  ]
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return <ControlledAccordion titleValue={'Accordion (click to collapse/expand)'}
                              collapsed={collapsed}
                              onChange={() => setCollapsed(!collapsed)}
                              items={items}
                              onClick={onClickCallback}
  />
}