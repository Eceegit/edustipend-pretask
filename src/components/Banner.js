import React from 'react'

const playlist = [
  {
    id: 1,
    title: "Changed by Geoffrey",
    sign: "+"
  },
  {
    id: 2,
    title: "Changed by Geoffrey",
    sign: "+"
  },
  {
    id: 3,
    title: "Changed by Geoffrey",
    sign: "+"
  },
  {
    id: 4,
    title: "Changed by Geoffrey",
    sign: "+"
  },
  {
    id: 5,
    title: "Changed by Geoffrey",
    sign: "+"
  }
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
        <h3 className='playlist-h'>Trending songs</h3>
        <div className='playlist-content'>
            {
              playlist.map(list => (
                <button key={list.id} className='title-playlist'>
                  {list.title} 
                  <span style={{fontWeight: "bold"}}> {/* */}
                  {list.sign}</span>
                </button>
              ))
            }
        </div>
        <div className='view-btn'>
          <button className=' banner-btn playlist-btn'>View more</button>
        </div>
      </div>
    </div>
  )
}

export default Banner