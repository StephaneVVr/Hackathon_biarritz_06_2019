import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary fixed-bottom d-flex justify-content-around" style={{margin:"auto"}}> 
        <p>
            Team ELO-Wild || Guilhem Demont, Stéphane Vivier, Fabien Goyhex, Guillaume Ribéroux
        </p>
        </nav>
      </div>
    );
  }
}
