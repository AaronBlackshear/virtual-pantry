import { Header } from '@/components/Layout/Header';
import { useLayoutContext } from '@/components/Layout/LayoutContext';
import { Sidebar } from '@/components/Layout/Sidebar';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { sidebarOpen, setSidebarOpen } = useLayoutContext()

  return (
    <div className="flex min-h-screen relative">
      <div className="block xl:hidden z-20">
        <Header />
      </div>

      <div className={classNames(
        "fixed top-0 left-0",
        "transition-transform h-screen z-20 xl:h-auto xl:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Sidebar />
      </div>

      <main className={classNames(
        "flex-1 bg-gray-12 xl:p-6 transition-all",
        "p-4 pt-20 min-h-screen xl:min-h-0",
        sidebarOpen ? "xl:pl-80" : "xl:pl-32"
      )}>
        <div
          className={classNames(
            "fixed top-0 left-0 transition-opacity bg-gray-1 bg-opacity-75",
            "block xl:hidden",
            sidebarOpen ? "w-screen h-screen opacity-100 z-10" : "w-0 h-0 opacity-0"
          )}
          role="presentation"
          onClick={() => setSidebarOpen(false)}
        />

        {children}
      </main>
    </div>
  )
}
