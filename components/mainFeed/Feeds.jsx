import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

const Feeds = () => {
  return (
    <div className='flex-grow pb-44 h-screen pt-6  mr-4 xl:mr-40 overflow-y-auto  scrollbar-hide '>
      {' '}
      <div  className='max-w-md md:max-w-lg lg:max-w-xl mx-auto'>
        <Stories />
        <InputBox/>
<Posts/>
      </div>{' '}
    </div>
  )
}

export default Feeds
