// $ = jQuery = require('jquery');
// var React = require('react');
// var Home = require('./components/homePage.js');
// var About = require('./components/about/aboutPage');
// var Header = require('./components/common/header');
// var Authors = require('./components/authors/authorPage');

// React.render(<About/>, document.getElementById('app'));  // component & where to attach
// React.render(<Header/>, document.getElementById('app'));  // component & where to attach
// React.render(<Home/>, document.getElementById('app'));  // component & where to attach
// React.render(<Authors/>, document.getElementById('app'));  // component & where to attach


$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Authors = require('./components/authors/authorPage');


(function(win) {
	"use strict";

	var App = React.createClass({
		render: function() {
			var Child;

			switch (this.props.route) {
				case 'about': Child = About; break;
				case 'authors': Child = Authors; break;
				default: Child = Home;
			}
			return ( 
					<div>
						<Header />
						<Child />
					</div>
			);
		}
	});

	function render() {
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	win.addEventListener('hashchange', render);
	render();
})(window);