import React from 'react'
import ActionButtons from '../actionButtons'

function Song() {
  return (
    <div className="song-container">
      <div className="card-container">
        <div className="card-song">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273da9c76ed020a7894443a3f97"
            alt=""
          />
        </div>
      </div>
      <div className="info">
        <div className="description">
          <h3 className="title">The Only Thing</h3>
          <span>The strokes</span>
        </div>
        <div className="more">
          <span className="material-icons icons">more_vert</span>
        </div>
      </div>
      <div className="reproductor">
        <div className="container-reproductor">
          <div className="time">
            <span>3:00</span>
            <span>1:00</span>
          </div>
          <div className="bar-progress">
            <div className="bar-progress-medidor"></div>
          </div>
        </div>
      </div>
      <ActionButtons/>
    </div>
  )
}

export default Song
