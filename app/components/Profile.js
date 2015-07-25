var React       = require('react');
var Router      = require('react-router');
var Repos       = require('./github/Repos.js');
var UserProfile = require('./github/UserProfile.js');
var Notes       = require('./notes/Notes.js');
var ReactFire   = require('reactfire');
var Firebase    = require('firebase');
var helpers     = require('../utils/Helpers');

var Profile = React.createClass({
  mixins: [Router.State, ReactFire],
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  init: function() {
    var username = this.getParams().username;
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');
    helpers.getGithubInfo(username)
      .then(function(dataObject) {
        this.setState({
          bio: dataObject.bio,
          repos: dataObject.repos
        });
      }.bind(this));
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://flickering-inferno-6208.firebaseio.com');
    this.init()
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  componentWillReceiveProps: function() {
    this.unbind('notes');
    this.init();
  },
  handleAddNote: function(noteValue) {
    this.ref.child(this.getParams().username).set(this.state.notes.concat([noteValue]))
  },
  render: function() {
    var username = this.getParams().username;
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes username={username} 
                 notes={this.state.notes}
                 add_note_fun={this.handleAddNote} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
