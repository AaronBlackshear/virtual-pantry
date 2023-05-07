import { Input, InputProps } from '@/components/Input';
import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import { Icon, IconType } from '../Icon';

export interface SelectProps<T> extends Omit<InputProps, "type"> {
  selectValue: T;
  onSelectChange: (val: T) => void;
}

export function Select<T>({ children, selectValue, onSelectChange, fullWidth, disabled, ...props }: SelectProps<T>) {
  return (
    <Combobox
      value={selectValue}
      onChange={onSelectChange}
      disabled={disabled}
    >
      <Combobox.Input
        as={Input}
        fullWidth={fullWidth}
        {...props}
      />

      <Combobox.Options className={classNames("p-4 rounded-2xl bg-white drop-shadow-16dp mt-2", fullWidth ? "max-w-none" : "max-w-[320px]")}>
        {children}
      </Combobox.Options>
    </Combobox>
  )
}

interface SelectOptionProps<T> {
  children: React.ReactNode;
  value: T;
  variant?: 'image' | 'theme';
  image?: string;
  placeholderIcon?: IconType;
}

export function SelectOption<T>({ children, value, variant, image, placeholderIcon = "userCircle" }: SelectOptionProps<T>) {
  return (
    <Combobox.Option
      value={value}
      className={classNames(
        "rounded-2xl ui-active:bg-blue-3 flex items-center hover:cursor-pointer",
        !!variant ? "p-2 space-x-2" : "p-4"
      )}
    >
      {variant === 'image' && (
        <div className="flex justify-center items-center rounded-xl overflow-hidden w-8 h-8 bg-blue-6 text-white">
          {image ? (
            <Image src={image} alt={""} width={32} height={32} />
          ) : (
            <Icon type={placeholderIcon} size="md" />
          )}
        </div>
      )}

      <div className="button-md text-gray-2 ui-active:text-white">{children}</div>
    </Combobox.Option>
  )
}
