"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorapi');

var manageAuthorPage = React.createClass({

	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' }
		};
	},

	setAuthorState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});

	},

	saveAuthor: function(event){
		event.preventDefault();
		AuthorApi.saveAuthor(this.state.author);
	},

	render: function() {
			return (
					<AuthorForm 
					author={this.state.author} 
					onSave = {this.saveAuthor}
					onChange = {this.setAuthorState}/>
			);
		}	
});

module.exports = manageAuthorPage;