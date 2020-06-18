import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Home from 'Routes/Home';
import Team from 'Routes/Team';
import Header from 'Components/Header';

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/team" exact component={Team} />
			<Redirect from="*" to="/" />
		</Switch>
	</Router>
);
