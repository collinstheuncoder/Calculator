import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class CalcKey extends React.Component {
	constructor(props) {
		super(props);
		
		this.getkeyValue = this.getkeyValue.bind(this);
	}

	getkeyValue() {
		console.log('I am Groot');
	}

	render() {
		return (
			<div className="keys">
				<RaisedButton 
					className={`key-${ this.props.label }`} 
					label={ this.props.label } 
					onClick={ this.getkeyValue }
				/>
			</div>
		);
	}
}

CalcKey.propTypes = {
	label: PropTypes.string,
};

export default CalcKey;