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
  const sharedIconClasses = classNames(
    "absolute top-5 text-gray-1 peer-disabled:text-gray-10",
    state === 'success' && "text-green-1",
    state === 'error' && "text-red-3",
  )

  return (
    <div className={classNames(
      "flex flex-col items-start space-y-2 flex-1",
      fullWidth ? "max-w-none" : "max-w-[320px]",
    )}>
      <label className="relative w-full flex items-center">
        <input
          {...props}
          type={type}
          placeholder={label}
          className={classNames(
            "peer h-14 text-button-md w-full text-gray-2 px-4 pt-6 pb-1.5 bg-white border rounded-2xl overflow-hidden placeholder-transparent transition-all appearance-none",
            "border-[#f1f1f1] focus:border-blue-3 focus:outline outline-blue-3 outline-1",
            "hover:border-blue-3",
            iconLeft ? 'pl-11' : 'pl-4',
            iconRight ? 'pr-11' : 'pr-4',
            state === 'success' && "text-green-1 border-green-1",
            state === 'error' && "text-red-3 border-red-3",
            "disabled:bg-gray-12 disabled:text-gray-8 disabled:border-[#f1f1f1]"
          )}
        />

        <p className={classNames(
          "absolute text-body-small text-gray-8 top-1.5 transition-all",
          "peer-placeholder-shown:top-4 peer-focus:top-1.5",
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

      {helperText && <p className="text-caption text-gray-8">{helperText}</p>}
    </div>
  )
}
