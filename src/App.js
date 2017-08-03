import React from 'react';
import AppNavBar from './components/NavBar';
import AppMain from './components/Main';
import './scss/style.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<AppNavBar title="React-Material Calculator" />
				<AppMain />
			</div>
		);
	}	
}

export default App;