import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { db, storage } from '../../firebase'
import { v4 } from 'uuid'
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadString,
} from 'firebase/storage'
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
  set,
  getFirestore,
  updateDoc,
} from 'firebase/firestore'

const InputBox = () => {
  const { data: session, status } = useSession()

  const [imageToPost, setImageToPost] = useState(null)
  const inputRef = useRef()
  const filePickerRef = useRef()

  // const sendPost = async (e) => {
  //   e.preventDefault()

  //   if (!inputRef.current.value) return
  //   await addDoc(collection(db, 'posts'), {
  //     message: inputRef.current.value,
  //     name: session.user.name,
  //     email: session.user.email,
  //     image: session.user.image,

  //     timestamp: serverTimestamp(),
  //   }).then((doc) => {
  //     if (imageToPost) {
  //       const storageRef = ref(storage, `posts/${doc.id}`)
  //       const imageRef = ref(storage, `posts/${imageToPost.name  +v4()}`)
  //        uploadBytes(storageRef, imageToPost)

  //        .then(()=>alert('uploaded'))

  //        removeImageFromPost()

  //     }
  //   })
  //   inputRef.current.value = ''
  // }

  // if (loading) return
  //     setLoading(true)
  //     // create a post and add to firestore 'post' collection
  //     // get post id for the newly created post
  //     // upload image to firebase storage storage with the postid
  //     // get a downloadurl from  fb storage and upload the original post with image
  //     const docRef = await addDoc(collection(db, 'posts'), {
  //       username: session.user.username,
  //       caption: captionRef.current.value,
  //       profileImg: session.user.image,
  //       timestamp: serverTimestamp(),
  //     })

  //     console.log('new post added',  docRef.id)

  //     const imageRef = ref(storage, `posts/${docRef.id}/image`)
  //     await uploadString(imageRef, selectedFile, 'data_url').then(async(snapshot)=>{
  //       const downloadURL = await getDownloadURL(imageRef)

  //       await updateDoc(doc(db, 'posts', docRef.id),{
  //         image : downloadURL
  //       })
  //     })
  // setOpen(false)
  // setLoading(false)
  // setSelectedFile(null)
  //   }

  const sendPost = async (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return
    const docRef = await addDoc(collection(db, 'posts'), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    })

    console.log('new post added', docRef.id)

    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    await uploadString(imageRef, imageToPost, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef)

        await updateDoc(doc(db, 'posts', docRef.id), {
          postImage: downloadURL,
        })
      }
    )
    inputRef.current.value = ''
     removeImageFromPost()
  }
  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImageFromPost = () => {
    setImageToPost(null)
  }
  return (
    <div className='bg-white p-2 rounded-2xl text-gray-500 font-medium shadow-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
          alt='profile pic'
          className='rounded-full'
        />
        <form className='flex flex-1' onSubmit={sendPost}>
          <input
            className='rounded-full h-12 flex-grow focus:outline-none px-5 bg-gray-100'
            type='text'
            ref={inputRef}
            placeholder={`what's  on your mind ${session.user.name}?`}
          />{' '}
          <button hidden type='submit' onClick={sendPost}>
            submit{' '}
          </button>
        </form>{' '}
        {imageToPost && (
          <div
            className='flex flex-col transition hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
            onClick={removeImageFromPost}>
            <img
              src={imageToPost}
              alt='image'
              className='h-10 object-contain'
            />
            <p className='text-xs text-red-500 text-center'>
              remove{' '}
            </p>{' '}
          </div>
        )}{' '}
      </div>{' '}
      <div className='flex  justify-evenly p-3 border-t'>
        <div className='flex items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 cursor-pointer rounded-xl'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>
            live video{' '}
          </p>{' '}
        </div>{' '}
        <div
          className='flex items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 cursor-pointer rounded-xl'
          onClick={() => filePickerRef.current.click()}>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>
            photo / video{' '}
          </p>{' '}
          <input
            type='file'
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />{' '}
        </div>{' '}
        <div className='flex items-centerspace-x-1 flex-grow justify-center p-2 hover:bg-gray-100 cursor-pointer rounded-xl'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>
            feeling / activity{' '}
          </p>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default InputBox
