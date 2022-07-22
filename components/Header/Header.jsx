import React from 'react'
import Link from 'next/link'
import HeaderIcon from './HeaderIcon'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserViewIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  SearchIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
const Header = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  return (
    <header className='flex items-center sticky top-0 shadow-md bg-white z-50 p-2 lg:px-5'>
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
          alt='facebook logo'
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 ext-gray-600' />
          <input
            className='hidden md:inline-flex  items-center ml-2 bg-transparent outline-none placeholder-gray-500'
            type='text'
            placeholder='search facebook'
          />
        </div>{' '}
      </div>{' '}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6  md:space-x-2'>
          <HeaderIcon Icon={HomeIcon} />{' '}
          <HeaderIcon active Icon={FlagIcon} />{' '}
          <HeaderIcon Icon={PlayIcon} />{' '}
          <HeaderIcon Icon={ShoppingCartIcon} />{' '}
          <HeaderIcon Icon={UserGroupIcon} />{' '}
        </div>{' '}
      </div>{' '}
      <div className='flex sm:space-x-2 items-center justify-end'>
        <Image
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
          alt='facebook logo'
          onClick={() => signOut()}
          className='rounded-full cursor-pointer'
        />
        {session ? (
          <p className='whitespace-nowrap font-semibold pr-3'>
            {' '}
            {session.user.name}{' '}
          </p>
        ) : (
          ''
        )}{' '}
        <ViewGridIcon className='hidden xl:inline-flex  hover:bg-gray-300 bg-gray-200 h-10 w-10 cursor-pointer rounded-full p-2 text-white' />
        <ChatIcon className='hidden xl:inline-flex  hover:bg-gray-300 bg-gray-200 h-10 w-10 cursor-pointer rounded-full p-2 text-white' />
        <BellIcon className='hidden xl:inline-flex  hover:bg-gray-300 bg-gray-200 h-10 w-10 cursor-pointer rounded-full p-2 text-white' />
        <ChevronDownIcon className='hidden xl:inline-flex  hover:bg-gray-300 bg-gray-200 h-10 w-10 cursor-pointer rounded-full p-2 text-white' />
      </div>{' '}
    </header>
  )
}

export default Header
