import React from 'react';
import TaskList from './TaskList';

class Task extends React.Component {
  render() {
    if(this.props.subtask) {
      return (
        <div key={this.props.task.id}>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td style={{paddingLeft: 1 + 'em'}}>{this.props.task.description}</td>
            <td>{this.props.task.estimate}</td>
          </tr>
        </div>);
    } else {
      return (
        <div key={this.props.task.id}>
          <tr>
            <td>&nbsp;</td>
            <td>{this.props.index}</td>
            <td>{this.props.task.description}</td>
            <td>{this.props.task.estimate}</td>
          </tr>
          <TaskList tasks={this.props.task.subtasks}
                    subtasks_list={true} />
        </div>
    )}
  }
};

Task.propTypes = {
  task: React.PropTypes.object.isRequired
}

export default Task;