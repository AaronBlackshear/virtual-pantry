import classNames from "classnames";

export type ButtonVariant = 'primary' | 'secondary' | 'link' | 'redPrimary' | 'redSecondary' | 'favorite' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

type GetButtonStylesProps = {
  variant: ButtonVariant;
  size: ButtonSize;
}

export function getButtonStyles({ variant, size }: GetButtonStylesProps) {
  return `${getVariantStyles(variant)} ${getSizeStyles(size)}`
}

function getVariantStyles(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return 'bg-blue-5 hover:bg-blue-6 focus:outline-4 focus:outline-blue-10 outline-offset-0 disabled:bg-blue-8 outline-none text-white rounded-xl';

    case 'secondary':
      return classNames(
        'bg-transparent rounded-xl',
        'text-blue-5',
        'border border-gray-8 outline-none outline-offset-0',
        'hover:text-blue-6 hover:border-blue-6 focus:text-blue-3 focus:border-blue-3 focus:outline-blue-3 focus:outline-1',
        'disabled:border-gray-11 disabled:text-blue-8'
      )

    case 'link':
      return 'text-blue-5 hover:text-blue-6 focus:border-blue-6 focus:border-b outline-none rounded-none disabled:text-blue-8';

    case 'redPrimary':
      return 'bg-red-5 hover:bg-red-6 focus:outline-4 focus:outline-red-10 outline-offset-0 disabled:bg-red-8 outline-none text-white rounded-xl';

    case 'redSecondary':
      return 'bg-transparent text-red-5 rounded-xl border border-gray-11 outline-none outline-offset-0 hover:text-red-6 hover:border-red-6 focus:text-red-3 focus:border-red-3 focus:outline-red-3 focus:outline-1 disabled:border-gray-11 disabled:text-red-8'

    case 'favorite':
      return classNames(
        'bg-gray-11 rounded-xl',
        'text-red-3',
        'outline-none outline-offset-0',
        'hover:border-red-6 focus:border-red-3 focus:outline-red-3 focus:outline-1',
        'disabled:border-gray-11 disabled:text-red-8'
      )

    case 'icon':
      return 'text-blue-5 outline-offset-0 hover:border-blue-6 focus:text-blue-3 focus:border-blue-3 focus:outline-blue-3 focus:outline-2 outline-none disabled:text-blue-8 rounded-lg';
  }
}

function getSizeStyles(size: ButtonSize): string {
  switch (size) {
    case 'sm':
      return 'p-2 button-sm';

    case 'md':
      return 'p-2 button-md'

    case 'lg':
      return 'px-4 py-2 button-lg'
  }
}

export function getFontSpacingStyles(size: ButtonSize): string {
  switch (size) {
    case 'sm':
      return 'px-2';

    case 'md':
      return 'p-2'

    case 'lg':
      return 'p-2'
  }
}