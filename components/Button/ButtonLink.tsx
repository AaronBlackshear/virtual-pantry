import { ButtonBaseProps } from '@/components/Button';
import { getButtonStyles, getFontSpacingStyles } from '@/components/Button/utils';
import { Icon } from '@/components/Icon';
import Link, { LinkProps } from 'next/link';
import React from 'react';

type ButtonLinkProps = LinkProps & ButtonBaseProps;

export function ButtonLink({ children, variant, size = 'md', iconLeft, iconRight, ...props }: ButtonLinkProps) {
  const buttonStyles = getButtonStyles({ variant, size })
  const buttonFontStyles = getFontSpacingStyles(size)

  return (
    <Link {...props} className={`flex items-center rounded-xl ${buttonStyles}`}>
      {iconLeft && <Icon type={iconLeft} size={size} />}
      <span className={buttonFontStyles}>{children}</span>
      {iconRight && <Icon type={iconRight} size={size} />}
    </Link>
  )
}
