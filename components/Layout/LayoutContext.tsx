import { createContext, useContext, useState } from "react";

interface LayoutContextProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextProps | null>(null);

interface Props {
  children: React.ReactNode;
}

export function LayoutProvider({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);


  return (
    <LayoutContext.Provider value={{
      sidebarOpen,
      setSidebarOpen
    }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayoutContext() {
  return useContext(LayoutContext) as LayoutContextProps;
}