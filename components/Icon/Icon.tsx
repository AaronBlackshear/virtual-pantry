export type IconType =
  'userCircle' |
  'ellipsisHorizontal';

export type IconSizes = 'sm' | 'md' | 'lg';

interface Props {
  type: IconType;
  size: IconSizes;
  fill?: 'none' | 'currentColor';
}

export function Icon({ type, size, fill = 'none' }: Props): JSX.Element {
  const iconSizeStyles = getIconSizeStyles(size);
  const iconContent = getIconContent(type);

  return (
    <div className={`flex justify-center items-center ${iconSizeStyles}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-full">
        {iconContent}
      </svg>
    </div>
  )
}

function getIconSizeStyles(size: IconSizes): string {
  switch (size) {
    case 'sm':
      return 'w-4 h-4';

    case 'md':
      return 'w-6 h-6';

    case 'lg':
      return 'w-8 h-8';
  }
}

function getIconContent(type: IconType): JSX.Element {
  switch (type) {
    case 'userCircle':
      return <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />

    case 'ellipsisHorizontal':
      return <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />

  }
}
