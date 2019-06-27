import React, { Component } from 'react';
import * as campusData from './campuses.json';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';

class CampusPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentCampus: null
		};
	}

	componentDidMount() {
		const { campusName } = this.props.match.params;
		this.setState({ currentCampus: campusData.data.find(campus => campus.name === campusName) });
	}

	setRedirect = () => {
		this.setState({
			redirect: true
		});
	};
	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect exact to='/' />;
		}
	};

	render() {
		const { currentCampus } = this.state;
		return (
			<div>
				{this.renderRedirect()}
				{currentCampus && (
					<div className='mt-3 d-flex flex-column align-items-center'>
						<h4>{currentCampus.name}</h4>
						<p>{currentCampus.city}</p>
						<p>{currentCampus.country}</p>
						<p>{currentCampus.uid}</p>
						<p>{currentCampus.creation}</p>
						<p>{currentCampus.manager.firstname}</p>
						<p>{currentCampus.manager.lastname}</p>

						<div className='d-flex col-11'>
							<Button outline color='danger' onClick={this.setRedirect}>
								Retour
							</Button>
						</div>

						{/* <Popup>
							<ul>
								<li>nom: {currentCampus.name}</li>
								<li>adresse: {currentCampus.city}</li>
							</ul>
						</Popup> */}
					</div>
				)}
			</div>
		);
	}
}

export default CampusPage;
