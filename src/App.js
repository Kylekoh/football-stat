import React from 'react';
import GlobalStyles from 'Components/GlobalStyles';

// import components for react-route
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import LeaguePage from './pages/LeaguePage';
import TeamPage from './pages/TeamPage';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

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
			<Provider store={store}>
				<Router>
					<Header />
					<Switch>
						<Route path="/" exact component={LeaguePage} />
						<Route path="/league/:id" exact component={LeaguePage} />
						<Route path="/team/:id" exact component={TeamPage} />
						<Redirect from="*" to="/" />
					</Switch>
					<Footer />
				</Router>
				<GlobalStyles />
			</Provider>
		</>
	);
}

export default App;
