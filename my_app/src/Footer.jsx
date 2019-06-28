import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark fixed-bottom" style={{margin:"auto"}}> 
        <p>
            Team ELO-Wild || Guilhem Demont, Stéphane Vivier, Fabien Goyhex, Guillaume Ribéroux
        </p>
        </nav>
      </div>
    );
  }
}
