import React from 'react'
import Trendingcard from './Trendingcard'

type TrendingProps = {
    title:string;
    TopHits:Trending[];
}

const TrendingSections = ({title,TopHits}:TrendingProps) => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center mt-5'>
                <p className='text-2xl font-bold'>{title}</p>
                <p className='text-sm text-slate-300 '>See all</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-3 items-center justify-center'>
                {
                    TopHits.map((list) => (
                        <div key={list.id}>
                          <Trendingcard list={list}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingSections