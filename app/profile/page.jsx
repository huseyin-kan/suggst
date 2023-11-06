"use client"
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MyProfile = () => {
  const router = useRouter()
  const {data:session} = useSession()
  const [posts,setPosts] = useState()

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await fetch(`/api/profile/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }
    if(session?.user.id) fetchPosts()
  },[session])

  const handleDelete = async (post) => {

  }
  const handleEdit = (post) =>{ 
    router.push(`/update-suggest/?id=${post._id}`)
  }
  return (
    <Profile name="My" desc="Welcome to your profile page" data={posts} handleDelete={handleDelete} handleEdit={handleEdit}/>
  )
}

export default MyProfile