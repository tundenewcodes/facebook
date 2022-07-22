import Image from 'next/image'
import React from 'react'

const StoryCard = ({ src, name, profile }) => {
  return (
    <div className='relative h-14 w-14  md:w-20  md:h-20  lg:h-56 lg:w-32 cursor-pointer hover:scale-105 overflow-x  p-3'>
      <Image
        src={profile}
        width={40}
        height={40}
        layout='fixed'
        alt='profile pic'
        objectFit='cover'
        className='absolute opacity-0 lg:opacity-100 z-50 rounded-full top-10'
      />
      <Image
        src={src}
        className='object-cover brightness-75 rounded-full lg:rounded-3xl'
        layout='fill'
        alt='profile pic'
        objectFit='cover'
      />
    </div>
  )
}

export default StoryCard
