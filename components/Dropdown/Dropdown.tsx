import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { Fragment } from 'react';

interface DropdownLinkProps extends LinkProps {
  children: React.ReactNode;
}

interface DropdownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

type DropdownButtonType = DropdownButtonProps & { type: 'button' };
type DropdownLinkType = DropdownLinkProps & { type: 'link' };

type DropdownItemType = DropdownLinkType | DropdownButtonType;

type DropdownPosition = 'above' | 'below';

interface Props {
  children: React.ReactNode;
  items: DropdownItemType[];
  position?: DropdownPosition;
}

export function Dropdown({ children, items, position = 'below' }: Props) {
  const positonStyles = getPostionStyles(position);

  return (
    <Menu as="div" className="relative inline-block bottom-full">
      <Menu.Button>{children}</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items as="div" className={classNames("max-w-xs w-min min-w-[200px] p-4 drop-shadow-16dp rounded-2xl bg-white space-y-2 absolute right-0", positonStyles)}>
          {items.map((item, ind) => <DropdownItem key={ind} {...item} />)}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function getPostionStyles(position: DropdownPosition): string {
  switch (position) {
    case 'above':
      return '-top-2 transform -translate-y-full origin-top-right';

    case 'below':
      return '';
  }
}

function DropdownItem(item: DropdownItemType) {
  const { type, children } = item;
  const sharedClasses = "p-3 block w-full text-gray-1 bg-transparent rounded-lg text-button-md ui-active:bg-blue-6 ui-active:text-white"

  switch (type) {
    case 'button':
      return (
        <Menu.Item {...item} as="button" className={classNames("text-left", sharedClasses)}>
          {children}
        </Menu.Item>
      )

    case 'link':
      return (
        <Menu.Item {...item} className={sharedClasses} as={Link}>
          {children}
        </Menu.Item>
      )
  }
}