"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
	render: function(){
		return (

				<div className = "jumbotron">
					<div className="container">
						<h1>Pluralsight Administration</h1>
						<p>React, React Router and Flux for ultraresponsive web apps</p>
						<Link to="about" className="btn btn-lg btn-success">More Info</Link>
					</div>
				</div>
			);
	}
});

module.exports = Home;