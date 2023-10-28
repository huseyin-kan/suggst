"use client";

import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Nav = () => {
    const {data:session} = useSession()
    const [toggleDropdown,setToggleDropdown] = useState(false)
    const [providers,setProviders] = useState(null)

    useEffect(()=>{
        (async () => {
            const res = await getProviders()
            setProviders(res)
        })()
    },[])

  return (
    <nav className='flex items-center justify-around font-roboto  px-2'>
        <Link href='/' className='flex gap-2 items-center justify-center '>
            <Image src="/assets/logo.svg" width={30} height={30} className='object-contain'/>
            {/* <a target="_blank" href="https://icons8.com/icon/k26tEQmw0PSS/tips">Tips</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <p className='text-2xl text-center gradient  bg-clip-text text-transparent font-bold'>SugGST</p>
        </Link>
        <div className='sm:flex hidden gap-x-2'>
            {session?.user ?
            (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-suggest" className='gradient gradient border rounded-full border-red-700 text-center px-4 py-2 hover:opacity-80 tde'>Create Suggest</Link>
                    <button type="button" className='gradient bg-clip-text border rounded-full text-red-700 border-red-700 text-center px-4 py-2 hover:opacity-80 tde' onClick={signOut}>Sign Out</button>
                    <Link href="/profile" className='flex items-center justify-center'>
                        <Image width={36} height={36} src={session?.user.image} className='rounded-full' alt='profile'/>
                    </Link>
                </div>
            )
            :
            (
                <>
                {providers && Object.values(providers).map(provider=>(
                <button className='px-4 py-2 text-center rounded-full gradient border border-red-700 hover:opacity-80 tde' onClick={()=>signIn(provider.id)} key={provider.name}>Sign In</button>
                ))}
                </>
            )
        }
            
        </div>
        <div className='sm:hidden flex relative'>
            {session?.user ? 
            (   
            
                <div className='flex'>
                <Image src={session?.user.image}  width={36} height={36} className='rounded-full hover:cursor-pointer' alt='profile' onClick={()=>setToggleDropdown((prev)=>!prev)} />
                {
                    toggleDropdown && (
                        <div className='flex flex-col items-center justify-start absolute text-xl font-roboto font-semibold py-4 px-1 -right-20 divide-y mt-3 rounded-lg top-full bg-white/95 text-black min-w-[200px] gap-2'>
                            <Link href="/profile">Profile</Link>
                            <Link href="/create-suggest">Create Suggest</Link>
                            <button type="button" className='text-red-800' onClick={()=>setToggleDropdown(false)}>Sign Out</button>
                        </div>
                    )
                }
                </div>
            )
            :
            (
                <>
                {providers && Object.values(providers).map(provider=>(
                <button className='px-4 py-2 text-center rounded-full gradient border border-red-700 hover:opacity-80 tde' onClick={()=>signIn(provider.id)} key={provider.name}>Sign In</button>
                ))}
                </>
            )}

        </div>
    </nav>
  )
}

export default Nav