import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
	render: function() {
		return (
			<nav>
				<Link to="/">Home</Link>
				<Link to="/search">Search</Link>
				<Link to="/vote">Vote</Link>
			</nav>
		);
	}
});

export default Nav;