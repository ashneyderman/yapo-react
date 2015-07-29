import React from 'react';
import TaskList from './TaskList';

class Task extends React.Component {
  render() {
    var  task = this.props.task;
    return (
      <tr>
        <td>
          <a className="button" 
             onClick={this.props.remove_task_fun.bind(null,task.id)}>Delete</a>
        </td>
        <td>{this.props.index}</td>
        <td>{task.description}</td>
        <td>{task.estimate}</td>
      </tr>
    )
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
  remove_task_fun: React.PropTypes.func.isRequired
}

export default Task;