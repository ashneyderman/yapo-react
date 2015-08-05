import React from 'react';
import TaskList from './TaskList';

class Task extends React.Component {
  render() {
    var task = this.props.task;
    var removeFun = this.props.remove_task_fun;

    var subtasks = task.subtasks.map((subtask) => {
      return (
        <tr>
          <td width="10%"><a className="button" onClick={removeFun.bind(null,subtask.id)}>Delete</a></td>
          <td width="10%">{subtask.id}</td>
          <td width="40%" style={{paddingLeft: 1 + 'em'}}>{subtask.description}</td>
          <td width="40%">{subtask.estimate}</td>
        </tr>
      )
    });

    console.log(subtasks);

    return (
      <table width="100%">
        <tbody>
          <tr>
            <td width="10%"><a className="button" onClick={removeFun.bind(null,task.id)}>Delete</a></td>
            <td width="10%">{task.id}</td>
            <td width="40%">{task.description}</td>
            <td width="40%">{task.estimate}</td>
          </tr>
          {subtasks}
        </tbody>
      </table>
    )
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
  remove_task_fun: React.PropTypes.func.isRequired
}

export default Task;