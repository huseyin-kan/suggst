"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';

const PromptCard = ({post,handleTagClick,handleEdit,handleDelete}) => {
    const {data:session} = useSession()
    const router = useRouter()
    const pathName = usePathname()
    const [copied,setCopied] = useState('')

    const handleCopy = () =>{
        setCopied(post.suggest)
        navigator.clipboard.writeText(post.suggest)
        setTimeout(() => {
            setCopied('')
        }, 3000);

    }

    const userProfile = () =>{
        if(post.creator._id === session?.user.id) return router.push('/profile')

        router.push(`/profile/${post.creator._id}/?name=${post.creator.username}`)
    }

  return (
    <div className='flex-1 font-roboto rounded-lg border border-red-500 bg-white/20 bg-clip-padding p-6 backdrop-blur-lg pb-4 backdrop-filter md:w-[360px] w-full h-fit'>
       <div className='flex items-start justify-between gap-5'>
        <div onClick={userProfile} className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
            <Image src={post.creator.image} className='rounded-full object-contain' alt='user_image' width={40} height={40} />
            <div className='flex flex-col'>
                <h3 className='font-semibold text-gray-700'>{post.creator.username}</h3>
                <p className='text-sm text-gray-500'>{post.creator.email}</p>
            </div>
        </div>
        <div className='w-7 h-7 rounded-full bg-white/10 shadow-sm backdrop-blur flex justify-center items-center cursor-pointer' onClick={handleCopy}>
            <Image className='' alt='copy' width={12} height={12} src={copied===post.suggest?'/assets/tick.svg':'/assets/copy.svg'}/>
        </div>
       </div>
       <p className='my-4 text-sm text-gray-700'>{post.suggest}</p>
       <p className='text-sm gradient text-transparent bg-clip-text cursor-pointer' onClick={()=>handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p>
       {
        session?.user.id === post.creator._id && pathName==='/profile' &&
        (
            <div className='flex items-center justify-center mt-5 gap-4 border-t border-gray-100 pt-3'>
                <p className='yellow-gradient text-sm cursor-pointer' onClick={handleEdit}>Edit</p>
                <p className='red-gradient text-sm cursor-pointer' onClick={handleDelete}>Delete</p>
            </div>
        )
       }
    </div>
  )
}

export default PromptCard