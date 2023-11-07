"use client";
import Form from '@components/Form';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UpdateSuggest = () => {
    const router = useRouter()
    const[submitting,setSubmitting] = useState(false)
    const searchParams = useSearchParams()
    const suggestId = searchParams.get('id')
    const [post,setPost] = useState({
        suggest:'',
        tag:''
    })

    useEffect(()=>{
        const fetchSuggest = async () =>{
            const response = await fetch(`/api/suggest/${suggestId}`)
            const data = await response.json()

            setPost({suggest:data.suggest, tag:data.tag})
        }
        if(suggestId) fetchSuggest()
    },[suggestId])

    const updatePrompt = async (e) =>{
        e.preventDefault()

        setSubmitting(true)
        if(!suggestId) alert('Suggest id not found')

        try {
            const response = await fetch(`/api/suggest/${suggestId}`,{
                method: 'PATCH',
                body: JSON.stringify({
                    suggest:post.suggest,
                    tag:post.tag
                })
            })
            if(response.ok) router.push('/')
        } catch (error) {
            console.log(error.message);
        }
        finally{
            setSubmitting(false)
        }
    }

  return (
    <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt} />
  )
}

export default UpdateSuggest