import { Sidebar } from '@/components/Layout/Sidebar';
import classNames from 'classnames';
import { useLayoutContext } from './LayoutContext';

interface Props {
  children: React.ReactNode;
}

export function DesktopLayout({ children }: Props) {
  const { sidebarOpen } = useLayoutContext()

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0">
        <Sidebar />
      </div>

      <main className={classNames("flex-1 bg-gray-12 p-6 transition-all", sidebarOpen ? "pl-80" : " pl-32")}>
        {children}
      </main>
    </div>
  )
}
