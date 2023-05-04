import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../Icon'
import { useLayoutContext } from './LayoutContext'
import { UserIcon } from './UserCard'

export function Header() {
  const { sidebarOpen, setSidebarOpen } = useLayoutContext()

  return (
    <header className="w-screen p-2 bg-white fixed top-0 left-0 flex justify-between items-center">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Icon type="bars3" size="lg" />
      </button>

      <Link href="/">
        <Image src="/logo/logo_black_full.png" alt="Virtual Pantry" width="175" height="18" />
      </Link>

      <UserIcon size='md' />
    </header>
  )
}
