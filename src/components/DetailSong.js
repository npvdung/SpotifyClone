import React from 'react'
import { useContext } from 'react'
import { Songs } from '../Context'


export default function DetailSong() {
  const {song} = useContext(Songs)
  return (
    <div className='text-left col-span-1 p-3'>
        <h2 className="text-cyan-500 font-bold">Now playing</h2>
        <h2 className="text-neutral-400 text-2xl ">{song.name}</h2>
        <div className="w-[240px] m-auto mt-10">
          <img src={song.links.images[0].url} alt="avatar" className="w-full" />
        </div>
        <div className="flex justify-evenly item-center mt-8">
          <img src={song.links.images[1].url} alt="avatar" className="w-[70px] rounded-full" />
          <span className="text-xl text-teal-300 ">{song.author}</span>
        </div>
    </div>
  )
}
