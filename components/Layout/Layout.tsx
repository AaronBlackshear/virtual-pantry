import { DesktopLayout } from '@/components/Layout/DesktopLayout';
import { MobileLayout } from '@/components/Layout/MobileLayout';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <div className="hidden xl:block">
        <DesktopLayout>
          {children}
        </DesktopLayout>
      </div>

      <div className="block xl:hidden">
        <MobileLayout>
          {children}
        </MobileLayout>
      </div>
    </>
  )
}
