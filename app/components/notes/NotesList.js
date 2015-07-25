import React from 'react';

class NotesList extends React.Component {
  render() {
    var notes = this.props.notes.map((note, index) => {
      return <li key={index} className='list-group-item'> {note} </li>;
    });
    return (
      <ul className='list-group'>
        {notes}
      </ul>
    )
  }
};

export default NotesList;
