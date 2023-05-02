import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';
import { Button } from '../Button';

interface DropdownButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

type DropdownPosition = 'left' | 'right';

interface Props {
  children: React.ReactNode;
  items: DropdownButtonProps[];
  position?: DropdownPosition;
}

export function ButtonSelect({ children, items, position = 'right' }: Props) {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button as={Button} variant="secondary" size="sm" iconRight='chevronDown'>{children}</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items as="div" className={classNames("max-w-xs w-min mt-2 min-w-[200px] p-4 drop-shadow-16dp rounded-2xl bg-white space-y-2 absolute transform", position === 'left' ? 'left-0' : 'right-0')}>
          {items.map((item, ind) => (
            <Menu.Item
              {...item}
              key={ind}
              as="button"
              className={classNames("text-left p-3 block w-full text-gray-1 rounded-lg button-md ui-active:bg-blue-6 ui-active:text-white", item.active ? ' bg-gray-12' : 'bg-transparent')
              }>
              {item.children}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
