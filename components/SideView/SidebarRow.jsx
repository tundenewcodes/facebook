import React from 'react'
import Image from 'next/image'
const SidebarRow = ({src, title, Icon}) => {
  return (
    <div  className='flex items-center space-x-2 cursor-pointer rounded-xl hover:bg-gray-200 p-4'>
      {' '}
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
         layout='fixed'
          alt='logo'
          className='rounded-full'
        />
      )}{Icon && <Icon  className='h-8 w-8 text-blue-500'/>}

      <p className='hidden  sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow
