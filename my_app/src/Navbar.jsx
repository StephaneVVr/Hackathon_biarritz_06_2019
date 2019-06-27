import React from "react";

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
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Matches History
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Campuses
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Student List
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Biarritz
                  </a>
                  <a class="dropdown-item" href="#">
                    Berlin
                  </a>
                  <a class="dropdown-item" href="#">
                    Bordeaux
                  </a>
                  <a class="dropdown-item" href="#">
                    Bucarest
                  </a>
                  <a class="dropdown-item" href="#">
                    London
                  </a>
                  <a class="dropdown-item" href="#">
                    Madrid
                  </a>
                  <a class="dropdown-item" href="#">
                    Brussels
                  </a>
                  <a class="dropdown-item" href="#">
                    Lisbon
                  </a>
                  <a class="dropdown-item" href="#">
                    Paris
                  </a>
                  <a class="dropdown-item" href="#">
                    Marseille
                  </a>
                  <a class="dropdown-item" href="#">
                    Lille
                  </a>
                  <a class="dropdown-item" href="#">
                    Tours
                  </a>
                  <a class="dropdown-item" href="#">
                    Toulouse
                  </a>
                  <a class="dropdown-item" href="#">
                    Strasbourg
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
