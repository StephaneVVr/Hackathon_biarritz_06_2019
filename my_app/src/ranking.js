import React, { Component } from "react";
import Axios from "axios";

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRank: [{
        ber: "",
        bia: "",
        bor: "",
        bru: "",
        buc: "",
        lil: "",
        lis: "",
        lon: "",
        mad: "",
        mar: "",
        par: "",
        stra: "",
        toul: "",
        tour: "",
      }
      ]
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
        `le classement des campus ${this.state.dataRank}`
      </div>
    );
  }
}

export default Ranking;
