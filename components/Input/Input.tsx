import { Icon, IconType } from '@/components/Icon';
import { Nullable } from '@/lib/types';
import classNames from 'classnames';
import React from 'react';

type InputState = 'error' | 'success';

export type InputProps = {
  label: string;
  type?: 'text' | 'number' | 'email';
  helperText?: string;
  state?: Nullable<InputState>
  iconLeft?: IconType;
  iconRight?: IconType;
  fullWidth?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, type = 'text', helperText, state, iconLeft, iconRight, fullWidth = false, ...props }: InputProps) {
  const inputStyles = getSharedInputClasses({
    paddingLeft: !!iconLeft,
    paddingRight: !!iconRight,
    state
  })
  const sharedIconClasses = getSharedIconClasses(state || null);

  return (
    <div className={classNames(
      "flex flex-col items-start space-y-2 flex-1",
      fullWidth ? "max-w-none" : "max-w-[320px]",
    )}>
      <label className="relative w-full flex items-center">
        <input {...props} type={type} placeholder={label} className={inputStyles} />

        <p className={classNames(
          "absolute body-small text-gray-8 top-2.5 transition-all",
          "peer-placeholder-shown:top-5 peer-focus:top-2.5",
          !!iconLeft ? 'left-11' : 'left-4',
        )}>
          {label}
        </p>

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

      {helperText && <p className="caption text-gray-8">{helperText}</p>}
    </div>
  )
}

interface GetSharedInputClassesProps {
  paddingLeft: boolean;
  paddingRight: boolean;
  state?: Nullable<InputState>;
}

export function getSharedInputClasses({ paddingLeft, paddingRight, state }: GetSharedInputClassesProps) {
  return (
    classNames(
      "peer h-14 button-md w-full text-gray-2 px-4 pt-6 pb-1.5 bg-white border rounded-2xl overflow-hidden placeholder-transparent transition-all appearance-none",
      "border-[#f1f1f1] focus:border-blue-3 focus:outline outline-blue-3 outline-1",
      "hover:border-blue-3",
      paddingLeft ? 'pl-11' : 'pl-4',
      paddingRight ? 'pr-11' : 'pr-4',
      state === 'success' && "text-green-1 border-green-1",
      state === 'error' && "text-red-3 border-red-3",
      "disabled:bg-gray-12 disabled:text-gray-8 disabled:border-[#f1f1f1]"
    )
  )
}

export function getSharedIconClasses(state: Nullable<InputState>) {
  return (
    classNames(
      "absolute top-5 text-gray-1 peer-disabled:text-gray-10",
      state === 'success' && "text-green-1",
      state === 'error' && "text-red-3",
    )
  )
}
