"use client"
import { Myplaylist, playlist } from '@/data/rightSidebar'
// import { routes } from '@/data/sidebar'
import { BellIcon, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RightSIdebar = () => {
    return (
        <div className='bg-black/10'>

            <div className='flex flex-col gap-5 p-2 h-full w-full'>
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

                <div className='flex flex-col'>
                    <div className='flex  justify-between px-2'>
                        <p className='text-md font-medium'>Recently Played</p>
                        <p className='text-sm text-slate-300'>See all</p>
                    </div>

                    <div className='mt-3 flex flex-col gap-3 px-3'>
                        {
                            playlist.map((play) => (
                                <div key={play.id} className='flex justify-between items-center px-1'>
                                    <div className='flex gap-2 capitalize'>
                                        <div>
                                            <Image src={play.img} alt='playlist' width={100} height={100} className='h-[50px] w-[50px] rounded object-cover' />
                                        </div>
                                        <div className='flex flex-col justify-center '>
                                            <p className='font-semibold text-sm'>{play.title}</p>
                                            <p className='text-xs font-semibold text-slate-300'>{play.artist}</p>
                                        </div>
                                    </div>

                                    <p className='text-xs text-slate-300'>{play.time}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='flex flex-col'>
                    <div className='flex  justify-between px-2'>
                        <p className='text-md font-medium'>Recently Played</p>
                        <p className='text-sm text-slate-300'>See all</p>
                    </div>

                    <div className='mt-3 flex flex-col gap-3 px-3'>
                        {
                            Myplaylist.map((play) => (
                                <div key={play.id} className='flex justify-between items-center px-1'>
                                    <div className='flex gap-2 capitalize'>
                                        <div>
                                            <Image src={play.img} alt='playlist' width={100} height={100} className='h-[50px] w-[50px] rounded object-cover' />
                                        </div>
                                        <div className='flex flex-col justify-center '>
                                            <p className='font-semibold text-sm'>{play.title}</p>
                                            <p className='text-xs font-semibold text-slate-300'>{play.artist}</p>
                                        </div>
                                    </div>

                                    <p className='text-xs text-slate-300'>{play.time}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className='bg-white text-black text-center font-semibold capitalize p-2 rounded-md'>
                    <p>Create Play list</p>
                </div>

            </div>


        </div>
    )
}

export default RightSIdebar