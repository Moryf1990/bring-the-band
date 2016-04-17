import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
	render: function() {
		return (
			<nav className="navBar">
				<Link className="navLink" to="/">Home</Link>
				<Link className="navLink" to="/search">Search</Link>
				<Link className="navLink" to="/vote">Vote</Link>
			</nav>
		);
	}
});

export default Nav;