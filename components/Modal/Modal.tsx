import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, closeModal, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-3xl bg-white p-8">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

interface ModalTitleProps {
  children: React.ReactNode;
}

export function ModalTitle({ children }: ModalTitleProps) {
  return (
    <Dialog.Title className="text-headline text-gray-3">{children}</Dialog.Title>
  )
}

interface ModalDescriptionProps {
  children: React.ReactNode;
}

export function ModalDescription({ children }: ModalDescriptionProps) {
  return (
    <Dialog.Title className="text-caption text-gray-3">{children}</Dialog.Title>
  )
}
