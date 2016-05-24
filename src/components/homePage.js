"use strict";

var React = require('react');

var Home = React.createClass({
	render: function(){
		return (

				<div className = "jumbotron">
					<div className="container">
						<h1>Pluralsight Administration</h1>
						<p>React, React Router and Flux for ultraresponsive web apps</p>
						<button className="btn btn-lg btn-success">More Info</button>
					</div>
				</div>
			);
	}
});

module.exports = Home;