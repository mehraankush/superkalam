"use client"
// import { routes } from '@/data/sidebar'
import { routes } from '@/data/sidebar'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='h-screen  bg-[#1A2421]/30'>
            <div className='flex flex-col p-2 h-full w-full'>

                <div className='flex justify-between px-4  mt-2 h-fit w-full'>
                    <div className='flex justify-center items-center'>
                        <Image src='/logo.svg' alt='logo' width={100} height={100} className='h-10 w-10'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <MenuIcon />
                    </div>
                </div>

                <div className='flex flex-col justify-center px-4'>
                    {
                        routes.map((route) => (
                            <div key={route.id} className=' p-3 flex flex-col space-y-5 mt-5'>
                                <p className='uppercase text-slate-500 text-sm font-medium'>{route.section}</p>
                                <div className='ml-2 space-y-3'>
                                    {
                                        route.route.map((route) => (
                                            <div key={route.id} className='flex gap-3 items-center cursor-pointer text-sm text-slate-300'>
                                                <route.icon className='h-5 w-5' />
                                                <p className='font-medium'>{route.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>


        </div>
    )
}

export default Sidebar