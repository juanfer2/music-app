import React from 'react'
import Card from '../card'
import ListSongs from '../listSongs'

function PlayList() {
  return (
      <div className="play-list">
        <div className="song-container">
          <img src="https://i.scdn.co/image/ab67616d0000b273da9c76ed020a7894443a3f97" alt=""/>
        </div>
        <div className="song-content">
          <div className="song-info">
            <h3>Charmer</h3>
            <span>album by Journey</span>
            <span>13 songs</span>
          </div>
          <div className="song-actions">
            <Card>
              <div className="actions">
                <span className="material-icons items">
                  repeat
                </span>
                <span className="material-icons items">
                  shuffle
                </span>
                <span className="material-icons items">
                  create_new_folder
                </span>
              </div>
            </Card>
          </div>
        </div>
        <div>
          {[1,2,3,4,5,6,7].map( (song: number) => <ListSongs key={song} active={song === 3}  /> )}
        </div>
      </div>
  )
}

export default PlayList
