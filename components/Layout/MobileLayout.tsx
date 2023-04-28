import { Header } from '@/components/Layout/Header';
import { useLayoutContext } from '@/components/Layout/LayoutContext';
import { Sidebar } from '@/components/Layout/Sidebar';
import classNames from 'classnames';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function MobileLayout({ children }: Props) {
  const { sidebarOpen, setSidebarOpen } = useLayoutContext()

  return (
    <div className="relative">
      <Header />

      <div
        className={classNames(
          "fixed top-0 left-0 transition-transform h-screen z-10",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <Sidebar />
      </div>

      <main className="bg-gray-12 p-4 pt-20 min-h-screen">
        {/* Sidebar Overlay */}
        <div
          className={classNames(
            "fixed top-0 left-0 transition-opacity bg-gray-1 bg-opacity-75",
            sidebarOpen ? "w-screen h-screen opacity-100" : "w-0 h-0 opacity-0"
          )}
          role="presentation"
          onClick={() => setSidebarOpen(false)}
        />
        {children}
      </main>
    </div>
  )
}
