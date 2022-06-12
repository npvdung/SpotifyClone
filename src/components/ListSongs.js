import React from 'react'
import { Songs } from '../Context'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function ListSongs() {
  const {DataSongs, handleSetSong, song} = useContext(Songs)
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  }
  useEffect(() => {
    setidSong(song.id)
  }, [song]);

  return (
    <div className='col-span-2  overflow-y-scroll'> 
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr className="">
            <th className='w-[10%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Download</th>
            <th className='w-[10%]'><i className="fa fa-download"></i></th>
          </tr>
        </thead>
        <tbody className="">
          {
            DataSongs.map((song, index) =>(
              <tr key={index} 
                  className={`bg-slate-800 h-12 text-gray-400 hover:bg-gray-600 ${idSong === song.id && 'text-blue-300 bg-gray-500'}` 
                } 
                  onClick={() => handlePlaySong(song.id)}
              >
              <td className='text-center'>{index+1}</td>
              <td className='text-left'>{song.name}</td>
              <td className='text-center'>{song.author}</td>
              <td className='text-center'>
                <a href={song.url} className="">
                  <i href={song.url} className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}
