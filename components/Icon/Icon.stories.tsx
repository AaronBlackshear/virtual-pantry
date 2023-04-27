import { Icon } from '@/components/Icon';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const UserCircle: Story = {
  args: {
    size: 'lg',
    type: 'userCircle',
  },
};
