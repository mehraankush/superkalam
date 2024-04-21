"use client"
// import { routes } from '@/data/sidebar'
import { routes } from '@/data/sidebar'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='h-screen'>

            <div className='flex flex-col gap-5 p-2 h-full w-full'>
                <div>

                    <div className='flex justify-between border px-5  h-fit w-full'>
                        <div className='flex justify-center items-center'>
                            <Image src='/logo.svg' alt='logo' width={50} height={50} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <MenuIcon />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col border justify-center p-2'>
                    {
                        routes.map((route) => (
                            <div key={route.id} className='border p-3 flex'>
                                <p className='lowercase'>{route.section}</p>
                                <div className='ml-2'>
                                    {
                                        route.route.map((route) => (
                                            <div key={route.id} className='flex gap-2'>
                                                <route.icon />
                                                <p className='text-sm font-medium'>{route.name}</p>
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