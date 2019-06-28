import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import CampusPage from './campusPage';
import CampusList from './campusList';
import Matches from './Matches';
import WilderList from './wilderList'
import Ranking from './Ranking';

const RouterFile = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/' component={CampusList} />
					<Route exact path='/CampusList' component={CampusList} />
					<Route exact path='/CampusList/:campusName' component={CampusPage} />
					<Route exact path='/Matches' component={Matches} />
					<Route exact path='/Leaderboard' component={Ranking} />
					<Route exact path='/wildersList' component={WilderList} />
				</Switch>
			</Router>
		</div>
	);
};

export default RouterFile;
