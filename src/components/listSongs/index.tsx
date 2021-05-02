import React from 'react'

function ListSongs({active}: {active: boolean}) {
  return (
    <div className={active ? "list-songs active" : "list-songs" }>
      <span className="number">01</span>
      <img className="image" src="https://i.scdn.co/image/ab67616d0000b273da9c76ed020a7894443a3f97" alt=""/>
      <div className="song-info">
        <h4 className="title">The Only thing</h4>
        <span className="subtitle">Journey</span>
      </div>
      <span className="time">
        03:09
      </span>
    </div>
  )
}

export default ListSongs
