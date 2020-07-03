import React from 'react';
import GlobalStyles from 'Components/GlobalStyles';

// import components for react-route
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import HomeContainer from './Containers/HomeContainer';
import LeagueTableContainer from './Containers/LeagueTableContainer';
import TeamInfoContainer from './Containers/TeamInfoContainer';
import Header from 'Components/Header';

// import components for redux
import modules from './modules';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const store = createStore(
	modules,
	composeWithDevTools(applyMiddleware(ReduxThunk))
);

function App() {
	return (
		<>
			{' '}
			<Provider store={store}>
				<Router>
					<Header />
					<Switch>
						<Route path="/" exact component={HomeContainer} />
						<Route path="/league/:id" exact component={LeagueTableContainer} />
						<Route path="/team/:id" exact component={TeamInfoContainer} />
						<Redirect from="*" to="/" />
					</Switch>
				</Router>
				<GlobalStyles />
			</Provider>
		</>
	);
}

export default App;
