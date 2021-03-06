"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;    //node's event library.  Tells components when stores change
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = "change";

var _authors =[];

var AuthorStore = assign({}, EventEmitter.prototype, {   //gives Author Stores properties of EventEmitter
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);

  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function(callback){
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function(){
    return _authors;
  },

  getAuthorById: function(id){
    return _.find(_authors, {id: id});
  }
});

// .register "catches" Dispatcher.dispatch
Dispatcher.register(function(action){   //action is the object that authorActions sends (action.actionType, action.author)
  switch(action.actionType){

    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.UPDATE_AUTHOR:
      console.log("Author Updated");
      AuthorStore.emitChange();
      break;

      case ActionTypes.DELETE_AUTHOR:
  				_.remove(_authors, function(author) {
  						return action.id === author.id;
  				});
          console.dir(_authors);
  				AuthorStore.emitChange();
  				break;

  		default:
  				// NO OP

  }
});

module.exports = AuthorStore;
