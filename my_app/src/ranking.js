import React, { Component } from "react";
import Axios from "axios";

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRank: []
    };
  }

  componentDidMount = () => {
    Axios.get("http://localhost:8000/ranking")
      .then(response => {
        this.setState({ dataRank: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.dataRank);
    return (
      <div>
        {this.state.dataRank.map(rank => {
          return rank;
        })}
      </div>
    );
  }
}

export default Ranking;
