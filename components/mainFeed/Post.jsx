import Image from 'next/image'
import {ChatAltIcon, ThumbUpIcon, ShareIcon} from '@heroicons/react/outline'

export const Post = ({
  name,
  message,
  email,
  id,
  image,
  postImage,
  timestamp,
}) => {
  return (
    <div className='flex flex-col'>
      {' '}
      <div className='p-5 shadow-sm bg-white  mt-5   rounded-t-2xl'>
        <div className='flex items-center space-x-2'>
          <img
            src={image}
            alt='picture'
            height={40}
            width={40}
            className='rounded-full'
          />
          <div>
            <p className='font-medium'>{name}</p>
            <p className='text-xs  text-gray-400'>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className='pt-4'>{message}</p>
      </div>
      {postImage && (
        <div className='relative  h-56  bg-white  md:h-96 '>
          <Image
            src={postImage}
            layout='fill'
            objectFit='cover'
            alt='pic'
          />
        </div>
      )}
      <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
        <div className='flex items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 cursor-pointer rounded-none rounded-bl-2xl'>
          <ThumbUpIcon className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>{' '}
        </div>
        <div className='flex items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 cursor-pointer rounded-none '>
          <ChatAltIcon className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='flex items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 cursor-pointer rounded-none rounded-bl-2xl'>
          <ShareIcon className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}
