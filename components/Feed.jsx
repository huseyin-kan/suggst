"use client";
import React, { useEffect, useState } from 'react'
import SuggestCard from './SuggestCard';

const SuggestCardList=({data,tag,handleTagClick,searchText,closeTag})=>{
  
  return(
    <div className='mt-16 gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  '>
      {
        tag &&
        <div onClick={closeTag} className='cursor-pointer flex flex-col justify-center items-center h-40 text-xl'>
          Close Tag
          <span className='text-lg gradient bg-clip-text text-transparent'>#{tag}</span>
        </div>
      }
      {
      data.filter((post)=>{
        return searchText.trim().toLowerCase === "" ? 
        post 
        : 
        post.suggest.toLowerCase().includes(searchText.trim()) 
        || post.creator.username.toLowerCase().includes(searchText.trim())
        || post.tag.toLowerCase().includes(searchText.trim())
        }).map((post)=>(
          <SuggestCard key={post._id} post={post} handleTagClick={handleTagClick}/>
        ))
      }
    </div>
  )
}


const Feed = () => {
  const [posts,setPosts] = useState([])
  const [tag,setTag] = useState('')
  const [searchText,setSearchText] = useState('')
  const [taggedData,setTaggedData] = useState('')


  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch('/api/suggest')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  },[])

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  const handleTagClick =(tag) => {
    setTag(tag)
    const filteredData = posts.filter((p)=>{return p.tag === tag})
    setTaggedData(filteredData)

  }
  const closeTag = () => {
    setTag('')
  }

  return (
    <section className='mt-16 mx-auto w-full  flex justify-center items-center flex-col font-roboto '>
        <input type="text" value={searchText} onChange={handleSearch} className='peer block w-full max-w-xl rounded-md py-2 shadow-lg text-black text-sm font-roboto font-medium focus:border-black focus:outline-none focus:ring-0 border-gray-200 border pr-10 pl-4' placeholder='Search suggests, tags, usernames' />
        {
          tag ?
          (
            <SuggestCardList data={taggedData} searchText={searchText} tag={tag} handleTagClick={handleTagClick} closeTag={closeTag} />
          )
          :
          (
            <SuggestCardList data={posts} handleTagClick={handleTagClick} searchText={searchText}/>
          )
        }
    </section>
  )
}

export default Feed