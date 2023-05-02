import { ButtonSize, ButtonVariant, getButtonStyles, getFontSpacingStyles } from '@/components/Button/utils';
import { Icon, IconType } from '@/components/Icon';
import classNames from 'classnames';
import React from 'react';

export type ButtonBaseProps = {
  children?: React.ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: IconType;
  iconRight?: IconType;
  fullWidth?: boolean;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonBaseProps;

export function Button({ children, variant, size = 'md', iconLeft, iconRight, fullWidth = false, ...props }: ButtonProps) {
  const buttonStyles = getButtonStyles({ variant, size })
  const buttonFontStyles = getFontSpacingStyles(size)

  return (
    <button className={classNames(
      "flex justify-center items-center",
      fullWidth ? "w-full" : "w-fit",
      buttonStyles,
    )} {...props}>
      {iconLeft && <Icon type={iconLeft} size={size} />}
      {children && <span className={buttonFontStyles}>{children}</span>}
      {iconRight && <Icon type={iconRight} size={size} />}
    </button>
  )
}
