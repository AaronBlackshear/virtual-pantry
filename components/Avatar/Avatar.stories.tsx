import { Avatar } from '@/components/Avatar';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const IconAvatar: Story = {
  args: {
    size: 'lg',
    style: 'square',
    variant: 'icon',
    image: "https://picsum.photos/200"
  },
};

export const ImageAvatar: Story = {
  args: {
    size: 'lg',
    style: 'square',
    variant: 'image',
    image: 'https://picsum.photos/200'
  },
};

export const InitialsAvatar: Story = {
  args: {
    size: 'lg',
    style: 'square',
    variant: 'initials',
    initials: 'AB'
  },
};
