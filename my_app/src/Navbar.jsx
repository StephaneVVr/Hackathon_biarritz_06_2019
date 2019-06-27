import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a class="navbar-brand" href="/">
            ELO-Wild
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/Matches">Matches History</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to= "/CampusList">Campuses</Link> 
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link">
                    <Link to="/Wilders">Wilders List</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
