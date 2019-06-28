import React from "react";
import Axios from "axios";

export default class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
  }
  // get matches data from api
  componentDidMount() {
    Axios.get("http://localhost:8000/matches").then(response => {
      this.setState({ matches: response.data.matches });
    });
  }
  render() {
    return (
      <>
        {this.state.matches.map((match, i) => {
          return (
            <tr key={i}>
              <td>{match.isoDate}</td>
              <td>{match.homeTeam}</td>
              <td>{match.awayTeam}</td>
              <td>{match.winnerUid}</td>
            </tr>
          );
        })}
      </>
    );
  }
}
