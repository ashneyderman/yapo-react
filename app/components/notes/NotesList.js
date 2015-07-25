var React = require('react');

var NotesList = React.createClass({
  render: function() {
    var notes = this.props.notes.map(function(note, index) {
      return <li key={index} className='list-group-item'> {note} </li>;
    });
    return (
      <ul className='list-group'>
        {notes}
      </ul>
    )
  }
});

module.exports = NotesList;