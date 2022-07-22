import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {useCollection} from 'react-firebase-hooks/firestore'
import{db} from '../../firebase'
import { Post } from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(
          snapshot?.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          })
        )
      }
    )

    return unSubscribe
  }, [db])

  console.log(posts)
  return (
    <div>
      {' '}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          image={post.image}
          name={post.name}
          message={post.message}
          email={post.email}
          timestamp={post.timestamp}
          postImage={post.postImage}
        />
      ))}
      </div>)
}

export default Posts
