import { TopHits } from '@/data/mainSection'
import { ChevronLeft, ChevronRight, Ellipsis, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MainSection = () => {
    return (
        <div className='flex pb-10 flex-col overflow-y-scroll h-screen text-white px-7 bg-[#1A2421]/50'>

            <div className='flex justify-between gap-5 p-2 pt-5 items-center'>
                <div className='flex gap-1'>
                    <ChevronLeft />
                    <ChevronRight />
                </div>
                <div className='w-[600px] bg-white text-black rounded-full p-1 flex'>
                    <Search className='mt-1 ml-2 text-slate-500' />
                    <input type='text' placeholder='Search' className='border-none outline-none rounded-full p-1 w-full' />
                </div>
                <div>
                    <Ellipsis />
                </div>
            </div>

            <div className="bg-[url('/back.jpg')] text-white h-[280px] mt-5 bg-no-repeat bg-cover bg-center rounded-xl">

                <div className='flex justify-start h-full p-5 '>
                    <div className='h-full p-5 space-y-2'>
                        <p className='text-xs'>New Album</p>
                        <p className='text-5xl font-bold'>The Second Step: <br />
                            Chapter one
                        </p>
                        <p className='text-black/90 font-bold uppercase'>Treasure</p>

                        <div className='flex'>
                            <p className='bg-blue-600 text-center text-sm px-5 font-semibold p-1 rounded-md'>Listen Now</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex justify-between items-center mt-5'>
                    <p className='text-2xl font-bold'>Hello Woilon</p>
                    <p className='text-sm text-slate-300 '>See all</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3 items-center justify-center'>
                    {
                        TopHits.map((list) => (
                            <div key={list.id} className='flex flex-col items-center'>
                                <div className='rounded-md  w-full'>
                                    <Image quality={100} src={list.img} alt="playlist" width={100} height={100} className='h-[200px] w-[240px] rounded-md object-cover'/>
                                </div>
                                <div className='w-full capitalize mt-2'>
                                    <p className='font-semibold text-sm'>{list.title}</p>
                                    <p className='text-xs text-slate-300'>{list.artist}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex justify-between items-center mt-5'>
                    <p className='text-2xl font-bold'>New Releases for you</p>
                    <p className='text-sm text-slate-300 '>See all</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-2 items-center justify-center'>
                    {
                        TopHits.map((list) => (
                            <div key={list.id} className='flex flex-col items-center'>
                                <div className='rounded-md  w-full'>
                                    <Image quality={100} src={list.img} alt="playlist" width={100} height={100} className='h-[200px] w-[240px] rounded-md object-cover'/>
                                </div>
                                <div className='w-full capitalize mt-2'>
                                    <p className='font-semibold text-sm'>{list.title}</p>
                                    <p className='text-xs text-slate-300'>{list.artist}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default MainSection