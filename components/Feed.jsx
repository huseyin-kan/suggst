import React from 'react'

const Feed = () => {
  return (
    <section className='mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col font-roboto'>
        <input type="text" className='peer block w-full rounded-md py-2 shadow-lg text-black text-sm font-roboto font-medium focus:border-black focus:outline-none focus:ring-0 border-gray-200 border pr-10 pl-4' placeholder='Search suggests, tags, usernames' />
    </section>
  )
}

export default Feed