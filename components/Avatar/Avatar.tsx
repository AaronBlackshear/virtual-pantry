import { Icon } from '@/components/Icon';
import classNames from 'classnames';
import Image from 'next/image';

type AvatarSizes = 'sm' | 'md' | 'lg';
type AvatarStyles = 'square' | 'circle';
type AvatarVariants = 'icon' | 'image' | 'initials';
type AvatarThemes = 'blue' | 'green' | 'pink';

export interface AvatarProps {
  size: AvatarSizes;
  style: AvatarStyles;
  variant: AvatarVariants;
  theme?: AvatarThemes;
  image?: string;
  initials?: string;
}

export function Avatar(props: AvatarProps) {
  const { size, theme = 'blue', variant, style } = props;

  const avatarSizeClasses = getSizeClasses(size);
  const avatarThemeClasses = getThemeClasses(theme, variant);

  return (
    <div className={classNames('flex justify-center items-center overflow-hidden', avatarSizeClasses, avatarThemeClasses, style === 'circle' ? 'rounded-full' : '')}>
      {getAvatarContent(props)}
    </div>
  )
}

function getAvatarContent({ variant, size, image, initials = "AB" }: AvatarProps): JSX.Element {
  switch (variant) {
    case 'icon':
      return <Icon type='userCircle' size={size} />

    case 'image':
      if (!image) throw new Error('Missing image in Avatar');
      return (
        <div className="relative w-full h-full">
          <Image src={image} alt="User Avatar" fill />
        </div>
      );

    case 'initials':
      return <p className={classNames('uppercase', getInitialsSizeStyles(size))}>{initials.slice(0, 2)}</p>
  }
}

function getInitialsSizeStyles(size: AvatarSizes): string {
  switch (size) {
    case 'sm':
      return 'text-button-md';

    case 'md':
      return 'text-subheadline';

    case 'lg':
      return 'text-headline';
  }
}

function getSizeClasses(size: AvatarSizes): string {
  switch (size) {
    case 'sm':
      return 'w-8 h-8 rounded-xl';

    case 'md':
      return 'w-12 h-12 rounded-2xl';

    case 'lg':
      return 'w-16 h-16 rounded-3xl';
  }
}

function getThemeClasses(theme: AvatarThemes, variant: AvatarVariants): string {
  switch (theme) {
    case 'blue':
      return variant === 'icon' ? 'bg-blue-7 text-white' : 'bg-blue-11 text-blue-3';

    case 'green':
      return variant === 'icon' ? 'bg-green-7 text-white' : 'bg-green-11 text-green-1';

    case 'pink':
      return variant === 'icon' ? 'bg-pink-7 text-white' : 'bg-pink-11 text-pink-3';
  }
}
