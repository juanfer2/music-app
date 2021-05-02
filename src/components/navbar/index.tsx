import React from 'react';

function Navbar () {
  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="navbar-container-items">
          <span className="material-icons">
            favorite_border
          </span>
          <span className="material-icons items">
            repeat
          </span>
          <span className="material-icons items">
            shuffle
          </span>
          <span className="material-icons items">
            add
          </span>
        </div>
      </div>
    </div>);
}

// https://fettblog.eu/typescript-react/prop-types/
// visionamos\jvilladiego

//Navbar.propTypes = {
//  name: PropTypes.string.isRequired
//}

export default Navbar;


