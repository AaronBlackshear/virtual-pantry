import { Dropdown } from '@/components/Dropdown';
import { Icon } from '@/components/Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const PositionBelow: Story = {
  args: {
    children: <Icon type='ellipsisHorizontal' size='lg' />,
    items: [
      { children: 'Link', type: 'link', href: '#' },
      {
        children: 'Button', type: 'button', onClick: (e) => {
          e.preventDefault()
          console.log('Button clicked!')
        }
      },
    ]
  }
};

export const PositionAbove: Story = {
  args: {
    position: 'above',
    children: <Icon type='ellipsisHorizontal' size='lg' />,
    items: [
      { children: 'Link', type: 'link', href: '#' },
      {
        children: 'Button', type: 'button', onClick: (e) => {
          e.preventDefault()
          console.log('Button clicked!')
        }
      },
    ]
  },
};
