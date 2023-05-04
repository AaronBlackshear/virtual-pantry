import { Input } from '@/components/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['error', 'success', null]
    },
    disabled: {
      control: 'boolean',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "First name"
  },
};
