import React from 'react'
import Header from '../../components/Header/Header'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
import {GetStaticProps} from "next"

interface Props {
    post : Post
}


const Post = ({post}:Props) => {
    console.log(post)
  return (
   <main> <Header/></main>
  )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type == 'post']{
        _id, slug{
            current
        }}`
    const posts =  await sanityClient.fetch(query)
    const paths = posts.map((post:Post) => ({
        params: {
        slug:post.slug.current
    }
    }))
    return{
        paths,fallback:'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == 'post']{
  _id, title, slug, author ->{
  name, image

},'comments':*[
  _type == 'comment'  &&
  post._ref ==^._id && approved == true
],
description, mainImage, slug,body
}
`


    const posts = await sanityClient.fetch(query, {
    slug : params?.slug
    })

    if (!posts) {
        return {
            notFound:true
        }
    }
    return {
        props: {
            posts
        }
    }
}