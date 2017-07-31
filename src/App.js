import React from 'react';
import Header from './components/Header'
import './scss/style.scss';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header title="Calculator" />
			</div>
		)
	}	
}

export default App;