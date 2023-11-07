"use client"
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MyProfile = () => {
  const router = useRouter()
  const {data:session,status} = useSession()
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await fetch(`/api/profile/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }
    if(session?.user.id) fetchPosts()
  },[status])


  const handleDelete = async (post) => {
    const hasConfirmed = confirm('Are you sure you want to this suggest?')

    if(hasConfirmed){
      try {
        await fetch(`/api/suggest/${post._id.toString()}`,{method:'DELETE'})

        const filteredPost = posts.filter(p=>p._id!==post._id)

        setPosts(filteredPost)
      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleEdit = (post) =>{ 
    router.push(`/update-suggest/?id=${post._id}`)
  }
  return (
    <Profile name="My" desc="Welcome to your profile page" data={posts} handleDelete={handleDelete} handleEdit={handleEdit}/>
  )
}

export default MyProfile