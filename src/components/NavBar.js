import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const AppNavBar = props => {
	return (
		<div>
			<AppBar
				title={ props.title }
				iconClassNameRight="muidocs-icon-navigation-expand-more"
			/>
		</div>
	);
};

AppNavBar.propTypes = {
	title: PropTypes.string.isRequired
};

export default AppNavBar;