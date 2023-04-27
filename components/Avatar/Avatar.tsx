import React from 'react';

export interface AvatarProps {
  size: 'sm' | 'md' | 'lg';
  style: 'square' | 'circle';
  variant: 'icon' | 'image' | 'initials';
}

export function Avatar({ variant }: AvatarProps) {
  return (
    <div>
      {getAvatarContent(variant)}
    </div>
  )
}

function getAvatarContent(variant: AvatarProps['variant']): JSX.Element {
  switch (variant) {
    case 'icon':

  }
}
