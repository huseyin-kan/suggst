import Link from 'next/link'
import React from 'react'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex items-center space-y-6 flex-col mt-12'>
      <h1 className='text-5xl md:text-6xl font-bold gradient text-transparent bg-clip-text font-playpen text-center'>
        {type} Post
      </h1>
      <p className='text-center text-lg sm:text-xl max-w-2xl font-roboto text-gray-700'>
        {type} and share suggest what do you want.
      </p>
      <form onSubmit={handleSubmit} className='w-full max-w-2xl flex flex-col gap-6 font-roboto rounded-md  bg-white/20 shadow-md backdrop-blur p-4 '>
          <label>
            <span className='font-semibold text-gray-700 text-base'>Your Suggest</span>
            <textarea
            value={post.suggest}
            onChange={(e)=>setPost({...post,suggest:e.target.value})}
            className='w-full flex rounded-lg h-[220px] mt-2 p-3 text-sm text-gray-500 outline-0 resize-none' 
            placeholder='You can write your suggest here...'
            />
          </label>
          <label>
            <span className='font-semibold text-gray-700 text-base'>
              Tag {' '}
              <span className='font-normal'>(#food, #computer, #love)</span>
              <input 
              type="text"
              value={post.tag}
              onChange={(e)=>setPost({...post,tag:e.target.value})}
              placeholder='#tag'
              className='w-full flex rounded-lg p-3 mt-2 text-sm text-gray-500 outline-0'
              />
            </span>
          </label>
          <div className='flex items-center justify-end mx-2 mb-4 gap-4'>
            <Link href="/">Cancel</Link>
            <button type='submit' className='px-5 py-2 gradient text-center text-white rounded-md' disabled={submitting}>
              {submitting?`${type}...`:type}
            </button>
          </div>
      </form>
    </section>
  )
}

export default Form