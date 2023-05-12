export type ColorThemes = 'green' | 'blue' | 'pink';

export function getThemeClasses(color: ColorThemes): string {
  switch (color) {
    case 'green':
      return 'text-green-1 bg-green-11';

    case 'blue':
      return 'text-blue-3 bg-blue-11';

    case 'pink':
      return 'text-pink-3 bg-pink-11';
  }
}