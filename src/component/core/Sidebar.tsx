"use client"
import { routes } from '@/data/sidebar'
import useBooleanStore from '@/store/toggle'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    const { value, setValue } = useBooleanStore();
    console.log(value,"value")
    return (
        <div className={`${value ? 'z-[9] absolute md:hidden' : 'hidden lg:block'} h-screen w-[250px]  bg-[#101011]`}>
            <div className='flex flex-col p-2 h-full w-full'>

                <div className='flex justify-between px-4  mt-2 h-fit w-full'>
                    <Link href='/' className='flex justify-center items-center cursor-pointer'>
                        <Image src='/logo.svg' alt='logo' width={100} height={100} className='h-10 w-10' />
                    </Link>
                    <div className='flex cursor-pointer justify-center items-center text-white' onClick={() => setValue(!value)}>
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