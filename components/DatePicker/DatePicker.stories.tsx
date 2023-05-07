import { DatePicker } from '@/components/DatePicker';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
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
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    label: "Meal date",
    initialDate: new Date('2023-06-30')
  },
};
