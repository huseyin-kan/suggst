"use client";
import Form from '@components/Form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateSuggest = () => {
  const router = useRouter()
  const {data:session} = useSession()
  const [submitting,setSubmitting] = useState(false)
  const [post,setPost] = useState({
    suggest:"",
    tag:""
  })
  const createSuggest = async (e) =>{
        e.preventDefault()
        setSubmitting(true)

        try {
            const response  = await fetch('/api/prompt/new',{
                method:'POST',
                body: JSON.stringify({
                    suggest:post.suggest,
                    tag:post.tag,
                    creator:session?.user.id
                })
            })
            if(response.ok){
                router.push('/')
            }
        } catch (error) {
            console.log(error);
        }
        finally{
            setSubmitting(false)
        }

  }

  return (
    <Form  type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createSuggest}/>
  )
}

export default CreateSuggest