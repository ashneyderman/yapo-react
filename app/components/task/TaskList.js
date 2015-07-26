import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
  render() {
    if(this.props.subtasks_list && this.props.tasks) {
      var tasks = this.props.tasks.map((task, index) => {
        return (
          <Task task={task} index={index+1} subtask={true} />
        )
      });
      return (
        <div>
          {tasks}
        </div>
      );
    } else {
      var tasks = this.props.tasks.map((task, index) => {
        return (
          <Task task={task} index={index+1} />
        )
      });

      return (
        <table className="table table-hover">
          <tr>
            <th width="10%">&nbsp;</th>
            <th width="10%">#</th>
            <th width="40%">Description</th>
            <th width="40%">Estimate</th>
          </tr>
          {tasks}
        </table>
      );      
    }
  }
};

TaskList.propTypes = {
  tasks: React.PropTypes.array.isRequired
};

export default TaskList;

