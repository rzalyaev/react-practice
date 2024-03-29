import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Select} from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

export const CollapsedSelect = () => {
  return (
      <Select value={'1'} onChange={action('')} items={[]}/>
  )
};