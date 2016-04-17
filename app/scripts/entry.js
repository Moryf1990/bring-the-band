// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

// import a module from another file.
import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Nav from './nav.js';
import {Router, Route, hashHistory, Link} from 'react-router'
// import App from './app.js';

// render(
//   <App/>,
//   document.getElementById('app')
// );

const Home = React.createClass({
	render: function() {
		return (
			<div>
				<Nav/>
				<h1 className="homeHeader">Welcome to the Bands</h1>
			</div>
		)
	}
});

const Search = React.createClass({
	render: function() {
		return (
			<div>
				<Nav/>
				<h1 className="searchHeader">Search Here</h1>
				<div className="searchContent">
					<input className="searchInput" type="text" placeholder="Enter Band"/>
					<button className="searchButton">Search</button>
				</div>
			</div>
		);
	}
});

const Vote = React.createClass({
	render: function() {
		return (
			<div>
				<Nav/>
				<h1>Here is where you vote</h1>
			</div>
		);
	}
});

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Home}/>
		<Route path="/search" component={Search}/>
		<Route path="/vote" component={Vote}/>
	</Router>
)

ReactDOM.render(router, document.getElementById('app'));








