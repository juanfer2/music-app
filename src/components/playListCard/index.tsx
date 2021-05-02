import React from 'react'
import Card from '../card'

function PlayListCard() {
  return (
    <div className="play-list-card-container">

   
    <Card>
      <div className="play-list-card">
        <div className="content-image">
            <img src="https://i.scdn.co/image/ab67616d0000b273da9c76ed020a7894443a3f97" alt=""/>
            <img src="https://i.scdn.co/image/ab67616d0000b273da9c76ed020a7894443a3f97" alt=""/>
          </div>
          <div className="content-info">
            <div>
              <h4>Recently played</h4>
              <span>Metallica, Lana Del Rey</span>
            </div>
            <div className="icon-container">
              <span className="material-icons icon-go">
                double_arrow
              </span>
            </div>
          </div>
      </div>
    </Card>
    </div>
  )
}

export default PlayListCard
