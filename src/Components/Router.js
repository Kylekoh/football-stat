import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	withRouter
} from 'react-router-dom';
import Home from 'Routes/Home';
import Team from 'Routes/Team';
import League from 'Routes/League';
import Header from 'Components/Header';
import LeagueName from 'Components/LeagueName';

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/team" exact component={Team} />
			<Route path="/league/:id" exact component={League} />
			<Redirect from="*" to="/" />
		</Switch>
	</Router>
);
