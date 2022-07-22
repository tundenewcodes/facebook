import Image from 'next/image'


const Contact = ({ src, name }) => {
  return (
    <div   className='flex  items-center space-x-3 rounded-xl p-2 cursor-pointer mb-2 relative  hover:bg-gray-200'>
      <Image src={src} width={50} height={50} layout='fixed' alt='pics'/>
      <p>{name}</p>

      <div  className='bottom-2 left-7 absolute bg-green-600 h-3 w-3 animate-bounce'/>
    </div>
  )
}

export default Contact
