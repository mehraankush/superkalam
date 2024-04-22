import Image from 'next/image'
import React from 'react'

type TrendingCardProps = {
    list: Trending;
}

const Trendingcard = ({ list }: TrendingCardProps) => {
    return (
        <div key={list.id} className='flex flex-col items-center transition-all ease-in-out duration-150 hover:scale-110'>
            <div className='rounded-md  w-full'>
                <Image quality={100} src={list.img} alt="playlist" width={1000} height={1000} className='h-[200px] w-[240px] rounded-md object-cover' />
            </div>
            <div className='w-full capitalize mt-2'>
                <p className='font-semibold text-sm'>{list.title}</p>
                <p className='text-xs text-slate-300'>{list.artist}</p>
            </div>
        </div>
    )
}

export default Trendingcard