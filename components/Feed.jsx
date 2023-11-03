"use client";
import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard';

const PromptCardList=({data,tag,handleTagClick,searchText,closeTag})=>{
  console.log(data);
  return(
    <div className='mt-16 gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  '>
      {
        data.map((post)=>(
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}/>
        ))
      }
    </div>
  )
}


const Feed = () => {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  },[])
  const handleTagClick =()=>{}
  return (
    <section className='mt-16 mx-auto w-full  flex justify-center items-center flex-col font-roboto '>
        <input type="text" className='peer block w-full max-w-xl rounded-md py-2 shadow-lg text-black text-sm font-roboto font-medium focus:border-black focus:outline-none focus:ring-0 border-gray-200 border pr-10 pl-4' placeholder='Search suggests, tags, usernames' />
        <PromptCardList data={posts} handleTagClick={handleTagClick}/>
    </section>
  )
}

export default Feed