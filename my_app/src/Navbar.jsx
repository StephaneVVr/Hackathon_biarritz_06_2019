import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="/">
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
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/Matches">Matches History</Link>
              </li>
              <li className="nav-item">
                <Link to="/CampusList">Campuses</Link>
              </li>
              <li className="nav-item">
                <Link to="/WildersList">Wilders List</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
