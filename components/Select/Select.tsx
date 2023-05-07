import { InputProps, getSharedIconClasses, getSharedInputClasses } from '@/components/Input';
import { Nullable } from '@/lib/types';
import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import { Icon, IconType } from '../Icon';

type InputState = 'error' | 'success';

export interface SelectProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  selectValue: T;
  onSelectChange: (value: T) => void;
  label: string;
  type?: 'text' | 'number' | 'email';
  helperText?: string;
  state?: Nullable<InputState>
  imageLeft?: Nullable<string>;
  iconLeft?: IconType;
  iconRight?: IconType;
  fullWidth?: boolean;
}

export function Select<T>({ children, selectValue, onSelectChange, fullWidth, imageLeft, iconLeft, iconRight, state, label, ...props }: SelectProps<T>) {
  const inputStyles = getSharedInputClasses({
    paddingLeft: (!!(imageLeft || iconLeft) || imageLeft === null),
    paddingRight: !!iconRight,
    state,
  });
  const sharedIconClasses = getSharedIconClasses(state || null);

  return (
    <Combobox
      value={selectValue}
      onChange={onSelectChange}
    >
      <label className={classNames(
        "block relative",
        fullWidth ? "max-w-none" : "max-w-[320px]",
      )}>
        <Combobox.Input
          {...props}
          className={classNames(inputStyles)}
          placeholder={label}
        />

        <p className={classNames(
          "absolute body-small text-gray-8 top-2.5 transition-all",
          "peer-placeholder-shown:top-5 peer-focus:top-2.5",
          !!(iconLeft || imageLeft) ? 'left-11' : 'left-4',
        )}>
          {label}
        </p>

        {(imageLeft || imageLeft === null) && (
          <div className={`${sharedIconClasses} left-4`}>
            {imageLeft ? (
              <Image src={imageLeft} alt="" width={32} height={32} />
            ) : (
              <div>
                <Icon type="userCircle" size='md' />
              </div>
            )}
          </div>
        )}

        {iconLeft && (
          <div className={`${sharedIconClasses} left-4`}>
            <Icon type={iconLeft} size="sm" />
          </div>
        )}

        {iconRight && (
          <div className={`${sharedIconClasses} right-4`}>
            <Icon type={iconRight} size="sm" />
          </div>
        )}
      </label>

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
