import { CirclePlay, Heart, Mic, MonitorSmartphone, Repeat, Share2, Shuffle, SkipBack, SkipForward, SquarePlus, Volume2 } from 'lucide-react'
import React from 'react'

const MucisPlayer = () => {
    return (
        <div className='flex h-full border-t border-slate-500 justify-center md:justify-between text-white items-center' >
            <div className=' hidden md:flex justify-between items-center p-2 pl-7'>
                <div className='flex flex-col gap-1 capitalize'>
                    <p className='text-sm  text-slate-300'>comethru</p>
                    <p className='text-xs  text-slate-500'>Jeremy Zucker</p>
                </div>
                <div className='flex gap-2 ml-5 text-slate-400'>
                    <Heart className='w-5 h-5'/>
                    <SquarePlus className='w-5 h-5'/>
                </div>
            </div>

            <div className='w-[300px] space-y-2'>
                <div className='flex gap-3 justify-center items-center text-slate-300'>
                    <Shuffle className='w-5 h-5'/>
                    <SkipBack className='w-5 h-5'/>
                    <CirclePlay className='w-5 h-5'/>
                    <SkipForward className='w-5 h-5'/>
                    <Repeat className='w-5 h-5'/>
                </div>
                <div className='bg-white h-1 rounded-full w-full'>
                    <div className='bg-blue-700 h-1 rounded-full w-3/5'></div>
                </div>
            </div>

            <div className='mr-3 hidden md:block'>
                <div className='flex gap-3 items-center justify-center text-slate-300'>
                    <Volume2 className='w-5 h-5'/>
                    <div className='bg-white h-1 rounded-full w-[100px]'>
                        <div className='bg-blue-700 h-1 rounded-full w-4/5'></div>
                    </div>
                    <Mic className='w-5 h-5'/>
                    <MonitorSmartphone className='w-5 h-5'/>
                    <Share2 className='w-5 h-5'/>
                </div>

            </div>

        </div>
    )
}

export default MucisPlayer