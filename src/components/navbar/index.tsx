import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="navbar-container-items">
          <Link to="/">
            <span className="material-icons">
              favorite_border
            </span>
          </Link>
          <Link to="/song">
            <span className="material-icons items">
              repeat
            </span>
          </Link>
          <Link to="/play_list">
            <span className="material-icons items">
              shuffle
            </span>
          </Link>

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


