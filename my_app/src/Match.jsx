import React from 'react';
import Axios from 'axios';
// import { clearScreenDown } from "readline";

export default class Match extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matches: []
		};
	}
	// get matches data from api
	componentDidMount() {
		Axios.get('https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches')
			.then(response => {
				this.setState({ matches: response.data });
			})
			.catch(err => console.log(err));
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
