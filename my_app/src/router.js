import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import CampusPage from './campusPage';
import CampusList from './campusList';
import HomePage from './homePage';

const RouterFile = () => {
	return (
		<div>
			<Router>
				<Navbar
					color='light'
					light
					expand='md'
					className='d-flex justify-content-between flex-nowrap fixed-bottom col-12'
					style={{ fontSize: '12px' }}
				>
					<NavLink exact to='/' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
						Home
					</NavLink>
					<NavLink to='/CampusList' activeStyle={{ color: 'red' }} style={{ color: 'black', textDecoration: 'none' }}>
						Campus List
					</NavLink>
				</Navbar>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/CampusList' component={CampusList} />
					<Route exact path='/CampusList/:campusName' component={CampusPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default RouterFile;
