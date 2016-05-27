"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStores = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: AuthorStores.getAllAuthors()
		};
	},

	render: function() {
			return (
				<div>
					<h1>Authors</h1>
					<Link className="btn btn-lg btn-success" to="author">Manage Author</Link>
					<AuthorList authors = {this.state.authors}/>
				</div>
		);
	}
});

module.exports = AuthorPage;
