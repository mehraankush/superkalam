import React from 'react'
import PlayList from './PlayList'

type MusicProps = {
    title:string;
    playlist:playlist[]
}

const MusicSection = ({ title, playlist }: MusicProps) => {
    return (
        <div className='flex flex-col'>
            <div className='flex  justify-between px-2'>
                <p className='text-md font-medium'>{title}</p>
                <p className='text-sm text-slate-300'>See all</p>
            </div>

            <div className='mt-3 flex flex-col gap-3 px-3'>
                {
                    playlist.map((play:playlist) => (
                        <div key={play.id}>
                            <PlayList play={play} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MusicSection