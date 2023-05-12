import { Button } from '@/components/Button';
import { Modal, ModalDescription, ModalProps, ModalTitle } from '@/components/Modal';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithButton = ({ ...args }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open me!</button>
      <Modal {...args} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div className="flex flex-col space-y-2">
          <ModalTitle>Your account was created</ModalTitle>
          <ModalDescription>Dolor quis ullamco magna aliquip Lorem ipsum ipsum laborum qui laboris consectetur elit nisi.</ModalDescription>
        </div>

        <div className="w-full flex justify-between mt-6">
          <Button onClick={() => setIsOpen(false)} size="sm" variant="link">Save password</Button>
          <Button onClick={() => setIsOpen(false)} size="sm" variant="primary">Login now</Button>
        </div>
      </Modal>
    </>
  )
}

export const Primary: Story = {
  render: (args) => <ModalWithButton {...args} />,
  args: {
  }
};
