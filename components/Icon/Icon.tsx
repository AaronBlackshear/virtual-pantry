export type IconType =
  'userCircle';

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
      return <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  }
}
