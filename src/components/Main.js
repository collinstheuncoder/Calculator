import React from 'react';
import CalcScreen from './calcComponents/Screen';
import CalcKey from './calcComponents/Key';

const keys = [
	'C', '±', '%', '÷', 
	'x', '-', '+', '=',
	'.', '0', '1', '2', 
	'3', '4', '5', '6', 
	'7', '8', '9'
];

class AppMain extends React.Component {
	render() {
		return (
			<div className="text-center">
				<CalcScreen />
				{
					keys.map((key, index) => 
						<CalcKey key={ index } label={ key } />
					)
				}
			</div>
		);
	}
}

export default AppMain;