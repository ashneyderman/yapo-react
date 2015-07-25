import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} 
                 add_note_fun={this.props.add_note_fun} />
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
};

Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    add_note_fun: React.PropTypes.func.isRequired
};

module.exports = Notes;