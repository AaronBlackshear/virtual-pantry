import { Icon, IconType } from '@/components/Icon'
import { useLayoutContext } from '@/components/Layout/LayoutContext'
import { UserCard } from '@/components/Layout/UserCard'
import { getMealPlansUrl } from '@/lib/urls_app'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { UrlObject } from 'url'

export function Sidebar() {
  const router = useRouter();

  const { sidebarOpen, setSidebarOpen } = useLayoutContext()

  const basePathname = getBasePathname(router.pathname)

  return (
    <aside className={classNames(
      "bg-white rounded-tr-2xl rounded-br-2xl flex flex-col justify-between p-6 pt-8 transition-[width] h-screen",
      "w-screen max-w-sm xl:max-w-none",
      sidebarOpen ? "xl:w-72" : "xl:w-24",
    )}>
      <section className="space-y-6">
        <div className={classNames("flex items-center", sidebarOpen ? "justify-between" : "justify-center")}>
          <Link href="/" className={classNames("transition-[width]", sidebarOpen ? "w-full" : "w-0")}>
            <Image src="/logo/logo_black_full.png" alt="Virtual Pantry" width="175" height="18" />
          </Link>

          <button className="p-2 rounded-lg" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <div className={classNames("transition-transform transform duration-300 ease-in-out", sidebarOpen ? "rotate-0" : "rotate-180")}>
              <Icon type="arrowLeftOnRectangle" size="sm" />
            </div>
          </button>
        </div>

        <ul className="space-y-2">
          <NavLink iconType="documentText" href={getMealPlansUrl()} active={basePathname === getMealPlansUrl()}>Meal Plans</NavLink>
          <NavLink iconType="listBullet" href="#">Grocery Lists</NavLink>
          <NavLink iconType="book" href="#">Recipes</NavLink>
        </ul>
      </section>

      <section className="pt-6 border-t border-gray-11">
        <UserCard />
      </section>
    </aside>
  )
}

function getBasePathname(pathname: string): string {
  return `/${pathname.replace("/", "").split('/')[0]}`
}


interface NavLinkProps {
  children: React.ReactNode;
  iconType: IconType;
  href: UrlObject | string;
  active?: boolean;
}

function NavLink({ children, iconType, href, active = false }: NavLinkProps) {
  const { sidebarOpen } = useLayoutContext()

  return (
    <li>
      <Link
        href={href}
        className={classNames(
          "w-full flex items-center rounded-2xl overflow-hidden transition-all group",
          active ? "bg-blue-12" : "bg-transparent hover:bg-gray-11 focus:bg-gray-11",
          sidebarOpen ? 'p-2 pl-4 justify-start space-x-2' : 'p-3 justify-center'
        )}
      >
        <span
          className={classNames(
            "transition",
            active ? "text-blue-5 group-hover:text-blue-3 group-focus:text-blue-3" : "text-gray-10 group-hover:text-gray-3 group-focus:text-gray-3"
          )}
        >
          <Icon type={iconType} size="sm" />
        </span>
        <span
          className={classNames(
            "body-small-bold whitespace-nowrap transition-all",
            active ? "text-blue-5 group-hover:text-blue-3 group-focus:text-blue-3" : "text-gray-3",
            sidebarOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'
          )}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}

