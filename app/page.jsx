import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex items-center justify-center flex-col '>
      <h1 className='md:text-6xl text-4xl mt-5 font-bold text-red-800 font-playpen flex flex-col text-center'>
        Suggest anything about everything
        <span className='text-red-800/50 italic text-2xl mt-5'>*Everyhting*</span> 
      </h1>
      <p className='text-center mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl'>
          SugGST is a website that you can give any advice or tips about anything
      </p>
      <Feed/> 
    </section>
  )
}

export default Home