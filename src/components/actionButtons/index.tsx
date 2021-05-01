import React from 'react'

function ActionButtons() {
  return (
    <div className="button-actions-container">
      <button className="btn">
        <span className="material-icons icons">skip_previous</span>
      </button>
      <button className="btn">
        <span className="material-icons icons">play_arrow</span>
      </button>
      <button className="btn">
        <span className="material-icons icons">skip_next</span>
      </button>
    </div>
  )
}

export default ActionButtons
