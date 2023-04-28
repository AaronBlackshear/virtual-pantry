import { useWindowWidth as useWindowWidthLibrary } from "@react-hook/window-size";

export function useWindowWidth() {
  const width = useWindowWidthLibrary();

  const isServer = typeof window === 'undefined'

  const isMobile = isServer ? false : width <= 1200;
  const isDesktop = isServer ? true : width > 1200;

  return {
    width,
    isMobile,
    isDesktop
  }
}