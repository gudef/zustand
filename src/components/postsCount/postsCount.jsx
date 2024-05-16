'use client'
import React from 'react'
import { usePostStore } from '@/store/Post'

function postsCount() {

    const {posts} = usePostStore();

  return (
    <div>{posts.length}</div>
  )
}

export default postsCount