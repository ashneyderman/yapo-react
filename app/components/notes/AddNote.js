var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    add_note_fun: React.PropTypes.func.isRequired
  },
  handleSubmit: function() {
    var val = this.refs.note.getDOMNode().value;
    this.props.add_note_fun(val);
    this.refs.note.getDOMNode().value = '';
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" 
               ref="note" placeholder="Add New Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" 
                  type="button" onClick={this.handleSubmit}> Submit </button>
        </span>
      </div>
    );
  }
});

module.exports = AddNote;