import { Avatar } from '@/components/Avatar';
import { Dropdown } from '@/components/Dropdown';
import { Icon } from '@/components/Icon';
import { useLayoutContext } from '@/components/Layout';
import { getLogoutUrl } from '@/lib/urls_app';
import { useUser } from '@auth0/nextjs-auth0/client';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MAX_CHAR_LENGTH = 22;

export function UserCard() {
  const { user, isLoading } = useUser();
  if (isLoading) return <LoadinguserCard />
  if (!user) throw new Error('Missing user');

  const { sidebarOpen } = useLayoutContext()

  const name = user?.name || user?.nickname

  return (
    <div
      className={classNames(
        "flex items-center w-full",
        sidebarOpen ? "justify-between space-x-3" : "justify-center"
      )}
    >
      <UserIcon />

      <div
        className={classNames(
          "flex flex-col items-start justify-center overflow-hidden transition-all",
          sidebarOpen ? "w-full opacity-100 flex-1" : "w-0 opacity-0"
        )}
      >
        {name && <p className="body-small-bold text-gray-2 whitespace-nowrap">{truncateString(name)}</p>}
        {user?.email && <p className="caption text-gray-6 whitespace-nowrap">{truncateString(user.email)}</p>}
      </div>

      <div
        className={classNames(
          "transition-all",
          sidebarOpen ? "w-auto opacity-100" : "w-0 opacity-0"
        )}
      >
        <Dropdown position="above" items={[{ children: 'Logout', type: 'link', href: getLogoutUrl() }]}>
          <Icon type='ellipsisHorizontal' size='md' />
        </Dropdown>
      </div>
    </div>
  )
}

function UserIcon() {
  const { user } = useUser();

  const name = user?.name || user?.nickname
  const userInitials = name ? getUserInitials(name) : null;

  if (user?.picture)
    return <Avatar size="sm" style="square" variant="image" image={user.picture} />

  if (userInitials)
    return <Avatar size="sm" style="square" variant={'initials'} initials={userInitials} />

  return <Avatar size="sm" style="square" variant={'icon'} />
}

function LoadinguserCard() {
  return (
    <div className="flex justify-between items-center space-x-3 w-full">
      <Avatar size="sm" style="square" variant='icon' />

      <div className="flex-1">
        <Skeleton count={2} />
      </div>
    </div>
  )
}

function getUserInitials(fullName: string) {
  const [givenName, familyName] = fullName.split(' ');

  if (!familyName) return `${givenName.slice(0, 2)}`.toUpperCase();

  return `${givenName.slice(0, 1)}${familyName.slice(0, 1)}`.toUpperCase();
}

function truncateString(str: string) {
  if (str.length < MAX_CHAR_LENGTH) return str;

  return `${str.slice(0, MAX_CHAR_LENGTH - 3)}...`
}
