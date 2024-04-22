"use client"
import { Myplaylist, playlist } from '@/data/rightSidebar'
import { BellIcon, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MusicSection from '../common/MusicSection'

const RightSIdebar = () => {
    return (
        <div className='bg-[#0A0A0A] text-white hidden md:block lg:w-[300px] h-screen'>

            <div className='flex flex-col p-2 h-full w-full'>

                <div className='flex justify-between h-fit w-full px-3'>
                    <div className='flex justify-center items-center gap-2 p-1'>
                        <Image src='/me.jpg' alt='User' width={100} height={100} className='h-10 w-10 rounded-full object-cover' />
                        <p className='font-semibold text-sm'>Ankush Mehra</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <BellIcon />
                        <ChevronDown />
                    </div>
                </div>

                <div className='mt-3'>
                    <MusicSection title="Recently Played" playlist={playlist} />
                </div>
                <div className='mt-3'>
                    <MusicSection title="My Playlist" playlist={Myplaylist} />
                </div>

                <div className='bg-white mt-1 cursor-pointer text-black text-sm text-center font-semibold capitalize p-2 rounded-md'>
                    <p>Create New Playlist</p>
                </div>

            </div>


        </div>
    )
}

export default RightSIdebar