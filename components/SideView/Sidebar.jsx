import { useSession, signIn, signOut } from 'next-auth/react'
import {
  UsersIcon,
  DesktopComputerIcon,
  ClockIcon,
  CalendarIcon,
} from '@heroicons/react/solid'
import {
  ShoppingBagIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  const { data: session, status } = useSession()
  return (
    <div className='mt-5 p-2 max-w-[600px]  xl:min-w-[300px]'>
      <SidebarRow
        src={session.user.image}
        title={session.user.name}
      />
      <SidebarRow Icon={UsersIcon} title='friends' />
      <SidebarRow Icon={UserGroupIcon} title='groups' />
      <SidebarRow Icon={ShoppingBagIcon} title='Market Place' />
      <SidebarRow Icon={DesktopComputerIcon} title='watch' />
      <SidebarRow Icon={CalendarIcon} title='events' />
      <SidebarRow Icon={ClockIcon} title='memories' />
      <SidebarRow Icon={ChevronDownIcon} title='see more..' />
    </div>
  )
}

export default Sidebar
