import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand "style={{color :"white"}} href="/">
            ELO-Wild
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavDropdown">
            <div >
              <Link to="/Leaderboard"style={{color :"white"}}>Leaderboard</Link>
            </div>

            <div>
              <Link to="/Matches"style={{color :"white"}}>Matches History</Link>
            </div>

            <div>
              <Link to="/CampusList"style={{color :"white"}}>Campuses</Link>
            </div>

            <div>
              <Link to="/WildersList"style={{color :"white"}}>Wilders List</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
