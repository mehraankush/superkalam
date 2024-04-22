"use client"
import { Myplaylist, playlist } from '@/data/rightSidebar'
import { BellIcon, ChevronDown, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import MusicSection from '../common/MusicSection'
import useTogglePlaylisytStore from '@/store/togglePlaylist'

const RightSIdebar = () => {
    const { toggle, setToggle } = useTogglePlaylisytStore();

    return (
        <div className={`${toggle ? 'z-[9] absolute right-0 md:hidden' : 'hidden lg:block'} bg-[#0A0A0A] text-white w-[300px] h-screen`}>

            <div className='flex flex-col p-2 h-full w-full'>
                <div className=' mt-1 ml-2 block md:hidden' onClick={() => setToggle(!toggle)}>
                    <X />
                </div>
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