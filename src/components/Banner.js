import React from 'react'

const playlist = [
  {
    id: 1,
    title: "Changed bt Geoffrey",
    sign: "+"
  },
  {
    id: 1,
    title: "Changed bt Geoffrey",
    sign: "+"
  },
  {
    id: 1,
    title: "Changed bt Geoffrey",
    sign: "+"
  },
  {
    id: 1,
    title: "Changed bt Geoffrey",
    sign: "+"
  },
]

function Banner() {
  return (
    <div className='body-container'>
        <div className='banner'>
            <div className='banner-content'>
            <h1 className='banner-h'>Make your party fun!</h1>
            <p className='banner-p'>Create your own custom playlist today.</p>

            <button className='banner-btn'>Create Playlist</button>
            </div>
        </div>

      <div className='playlist'>
        <div className='playlist-content'>
            {
              playlist.map(list => (
                b
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Banner