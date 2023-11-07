import React from 'react'
import SuggestCard from './SuggestCard'

const Profile = ({name,desc,data,handleEdit,handleDelete}) => {
    
  return (
    <section className='w-full '>
        <h1 className='text-center mt-10 text-5xl font-extrabold font-playpen text-black sm:text-6xl'>
            <span className='gradient bg-clip-text text-transparent'>{name} Profile</span>
        </h1>
        <p className='text-center mt-5 text-lg text-gray-700 mx-auto sm:text-xl max-w-2xl font-roboto'>{desc}</p>
        <p className='text-left gradient bg-clip-text text-transparent w-full max-w-6xl mx-auto mt-10 py-2 text-2xl sm:text-3xl font-playpen font-bold '>
            {name} <span className='text-black'>Posts</span>
        </p>
        <div className='mt-8 gap-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-1 max-w-6xl mx-auto'>
            {   
                data.length > 0
                ?
                data.map((post)=>(
                    <SuggestCard key={post._id} post={post} handleEdit={()=>handleEdit && handleEdit(post)} handleDelete={()=>handleDelete && handleDelete(post)}/>
                ))
                :
                <h1 className='text-4xl text-center text-orange-800 font-transpen font-bold'>No Suggestion Shared</h1>
            }
        </div>
    </section>
  )
}

export default Profile