import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightIcon,
  Bars3Icon,
  BookOpenIcon,
  ChevronDownIcon,
  CogIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  ListBulletIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

type HeroIconType = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>

export type IconType =
  'userCircle' |
  'ellipsisHorizontal' |
  'arrowLeftOnRectangle' |
  'documentText' |
  'listBullet' |
  'book' |
  'cog' |
  'bars3' |
  'chevronDown' |
  'arrowLeft' |
  'arrowRight';

export type IconSizes = 'sm' | 'md' | 'lg';

interface Props {
  type: IconType;
  size: IconSizes;
}

export function Icon({ type, size }: Props): JSX.Element {
  const iconSizeStyles = getIconSizeStyles(size);
  const Icon = getIcon(type);

  return (
    <div className={`flex justify-center items-center ${iconSizeStyles}`}>
      <Icon />
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

function getIcon(type: IconType): HeroIconType {
  switch (type) {
    case 'userCircle':
      return UserCircleIcon;

    case 'ellipsisHorizontal':
      return EllipsisHorizontalIcon;

    case 'arrowLeftOnRectangle':
      return ArrowLeftOnRectangleIcon;

    case 'documentText':
      return DocumentTextIcon;

    case 'listBullet':
      return ListBulletIcon;

    case 'book':
      return BookOpenIcon;

    case 'cog':
      return CogIcon;

    case 'bars3':
      return Bars3Icon;

    case 'chevronDown':
      return ChevronDownIcon;

    case 'arrowLeft':
      return ArrowLeftIcon;

    case 'arrowRight':
      return ArrowRightIcon;

  }
}
