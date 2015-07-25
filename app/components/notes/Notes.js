var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
  ppropTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    add_note_fun: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} 
                 add_note_fun={this.props.add_note_fun} />
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;