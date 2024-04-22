import Image from 'next/image'
import React from 'react'

type PlaylistProps = {
    play: playlist
}

const PlayList = ({ play }: PlaylistProps) => {

    return (
        <div className='flex justify-between items-center px-1'>
            <div className='flex gap-2 capitalize'>
                <div>
                    <Image src={play.img} alt='playlist' width={100} height={100} className='h-[50px] w-[50px] rounded object-cover' />
                </div>
                <div className='flex flex-col justify-center '>
                    <p className='font-semibold text-xs text-slate-300'>{play.title}</p>
                    <p className='text-xs font-semibold text-slate-500'>{play.artist}</p>
                </div>
            </div>

            <p className='text-xs text-slate-500'>{play.time}</p>
        </div>

    )
}

export default PlayList